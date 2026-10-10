import type { Testimonial } from '@/data/content';

/*
 * One feedback card, used on the homepage and on /feedback,
 * so a quote always looks the same wherever it appears.
 * The parent puts it inside an <li>.
 */
type FeedbackCardProps = {
  item: Testimonial;
  /** Show the month the feedback was given (used on /feedback) */
  showDate?: boolean;
};

export default function FeedbackCard({ item, showDate = false }: FeedbackCardProps) {
  return (
    // figure/blockquote/figcaption tie the quote to its author
    // for screen readers, not just visually.
    <figure className="feedback-card">
      <div className="feedback-card-head">
        <span className="feedback-mark" aria-hidden="true">
          &rdquo;
        </span>
        <span className="feedback-role">{item.label}</span>
      </div>

      {/* lang tells screen readers to read a Dutch quote in Dutch */}
      <blockquote className="feedback-quote" lang={item.lang}>
        {item.quote}
      </blockquote>

      {item.translation && (
        <p className="feedback-translation">&ldquo;{item.translation}&rdquo;</p>
      )}

      <figcaption className="feedback-person">
        <span className="feedback-name">{item.name}</span>

        {item.details.map((line) => (
          <span key={line} className="feedback-detail">
            {line}
          </span>
        ))}

        {showDate && item.date && (
          <span className="feedback-date">{item.date}</span>
        )}
      </figcaption>
    </figure>
  );
}