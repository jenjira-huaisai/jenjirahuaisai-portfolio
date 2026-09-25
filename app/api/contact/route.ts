/*
 * Receives the contact form and sends it by email with Resend.
 * Uses Resend's REST API directly, so no extra package is needed.
 * Needs RESEND_API_KEY, CONTACT_EMAIL_TO and CONTACT_EMAIL_FROM (see .env.example).
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

function asText(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  // Spam trap filled in: pretend it worked, send nothing
  if (asText(body.company, 200)) {
    return Response.json({ ok: true });
  }

  const name = asText(body.name, 100);
  const email = asText(body.email, 200);
  const message = asText(body.message, 5000);

  // Check again on the server: the browser check can be skipped
  if (!name || !EMAIL_PATTERN.test(email) || !message) {
    return Response.json({ error: 'Please fill in every field' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    console.error('Contact form: email settings are missing');
    return Response.json({ error: 'Email is not set up' }, { status: 500 });
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `New message from ${name}`,
      text: `${message}\n\n—\nName: ${name}\nEmail: ${email}\nSent from jenjirahuaisai.com/contact`,
    }),
  });

  if (!response.ok) {
    console.error('Contact form: Resend returned', response.status, await response.text());
    return Response.json({ error: 'Could not send' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
