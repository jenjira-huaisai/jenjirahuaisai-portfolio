'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type Field = 'name' | 'email' | 'message';
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status = 'idle' | 'sending' | 'sent' | 'failed';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD_ORDER: Field[] = ['name', 'email', 'message'];

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Enter your name';
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Enter an email address like name@company.com';
  }
  if (!values.message.trim()) errors.message = 'Write a message';
  return errors;
}

function Arrow() {
  return (
    <svg width="28" height="10" viewBox="0 0 28 10" fill="none" aria-hidden="true">
      <path d="M0 5h26M22 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const thankYouRef = useRef<HTMLHeadingElement>(null);

  // After sending, move focus to the thank-you heading so screen readers announce it
  useEffect(() => {
    if (status === 'sent') thankYouRef.current?.focus();
  }, [status]);

  const handleChange = (field: Field, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    // Clear a field's error as soon as the visitor fixes it
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);

    // Move focus to the first field that needs fixing
    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      const fieldToFocus = {
        name: nameRef.current,
        email: emailRef.current,
        message: messageRef.current,
      }[firstInvalid];
      fieldToFocus?.focus();
      return;
    }

    setStatus('sending');
    const honeypot = new FormData(event.currentTarget).get('company');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, company: honeypot }),
      });
      setStatus(response.ok ? 'sent' : 'failed');
    } catch {
      setStatus('failed');
    }
  };

  const resetForm = () => {
    setValues({ name: '', email: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  if (status === 'sent') {
    return (
      <div role="status">
        <p className="contact-page-eyebrow">CONTACT</p>
        <h1 id="contact-page-title" className="contact-page-title" ref={thankYouRef} tabIndex={-1}>
          Thank you.
        </h1>
        <p className="contact-page-intro">
          Your message is on its way. I’ll reply to the email address you gave.
        </p>
        <div className="contact-page-actions">
          <Link href="/" className="button-primary">
            Back to home
            <Arrow />
          </Link>
          <button type="button" className="hero-secondary-action" onClick={resetForm}>
            Send another message
          </button>
        </div>
      </div>
    );
  }

  const isSending = status === 'sending';

  return (
    <>
      <p className="contact-page-eyebrow">CONTACT</p>
      <h1 id="contact-page-title" className="contact-page-title">
        Let’s talk.
      </h1>
      <p className="contact-page-intro">
        For a UI or front-end internship from September 2027, or a project you have in mind.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
        <div className="form-field">
          <label htmlFor="contact-name" className="form-label">
            Name
          </label>
          <input
            ref={nameRef}
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="form-input"
            value={values.name}
            onChange={(event) => handleChange('name', event.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            maxLength={100}
          />
          {errors.name && (
            <p id="contact-name-error" className="form-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="contact-email" className="form-label">
            Email
          </label>
          <input
            ref={emailRef}
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            className="form-input"
            value={values.email}
            onChange={(event) => handleChange('email', event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            maxLength={200}
          />
          {errors.email && (
            <p id="contact-email-error" className="form-error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="contact-message" className="form-label">
            Message
          </label>
          <textarea
            ref={messageRef}
            id="contact-message"
            name="message"
            rows={5}
            placeholder="How can I help?"
            className="form-input form-textarea"
            value={values.message}
            onChange={(event) => handleChange('message', event.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            maxLength={5000}
          />
          {errors.message && (
            <p id="contact-message-error" className="form-error">
              {errors.message}
            </p>
          )}
        </div>

        {/* Spam trap: hidden from people, bots tend to fill it in */}
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="contact-company">Company</label>
          <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {status === 'failed' && (
          <p className="form-status-error" role="alert">
            Your message could not be sent. Please try again, or email{' '}
            <a href="mailto:info@jenjirahuaisai.com">info@jenjirahuaisai.com</a>.
          </p>
        )}

        <div className="contact-form-footer">
          <button type="submit" className="button-primary contact-form-submit" disabled={isSending}>
            {isSending ? 'Sending…' : 'Send message'}
            {!isSending && <Arrow />}
          </button>
          <p className="contact-form-note">
            Your details are only used to reply. Prefer email?{' '}
            <a href="mailto:info@jenjirahuaisai.com">info@jenjirahuaisai.com</a>
          </p>
        </div>
      </form>
    </>
  );
}
