const commitments = [
  "The school remains the owner of all its data, and can export or delete everything on request.",
  "Only the information needed to run the system is stored — fee schedules, balances, and contact details. Nothing more.",
  "Student and parent data is never sold, shared with third parties, or used to train AI models.",
  "Access is limited to your named staff and me; every message sent is logged and visible to your bursary.",
];

export default function DataPrivacy() {
  return (
    <section
      id="data"
      className="reveal data-strip"
      aria-labelledby="data-heading"
    >
      <p className="eyebrow">Data &amp; privacy</p>
      <h2 id="data-heading">
        Your school&rsquo;s data is handled the way you&rsquo;d want your
        child&rsquo;s data handled.
      </h2>
      <div className="prose">
        <p className="muted">
          Handled in line with the Nigeria Data Protection Act (2023). The full
          one-page data handling summary is available before any agreement —
          just ask.
        </p>
      </div>
      <div className="data-grid">
        {commitments.map((c) => (
          <div key={c}>{c}</div>
        ))}
      </div>
    </section>
  );
}
