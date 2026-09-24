type ProofFigure = {
  value: string;
  label: string;
};

// Update these as your projects grow — one line per figure
const PROOF_FIGURES: ProofFigure[] = [
  { value: '2', label: 'Independent client projects' },
  { value: '1', label: 'Full-stack system, live since 2025' },
  { value: '5', label: 'School projects, 1 with a real client' },
];

export default function ProofFigures() {
  return (
    <div className="proof-figures">
      {PROOF_FIGURES.map((figure) => (
        <div key={figure.label} className="proof-figure">
          <span className="proof-number">{figure.value}</span>
          <span className="proof-caption">{figure.label}</span>
        </div>
      ))}
    </div>
  );
}
