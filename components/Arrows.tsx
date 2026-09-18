/*
 * Line arrows drawn as SVG rather than typed as characters,
 * so the shape is identical in every browser and font.
 * currentColor lets them sit on dark buttons and light text alike.
 */

export function ArrowRight({ length = 26 }: { length?: number }) {
  const width = length + 2;
  return (
    <svg
      width={width}
      height="8"
      viewBox={`0 0 ${width} 8`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={`M0 4h${length}M${length - 4} 1l4 3-4 3`}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowDown({ length = 16 }: { length?: number }) {
  const height = length + 2;
  return (
    <svg
      width="8"
      height={height}
      viewBox={`0 0 8 ${height}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={`M4 0v${length}M1 ${length - 4}l3 4 3-4`}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 8L8 1M8 1H2.5M8 1v5.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
