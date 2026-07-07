const offerings = [
  {
    title: "Admissions follow-up",
    body: "Every enquiry answered promptly and followed up on schedule — no prospective parent forgotten between the open day and the offer letter.",
  },
  {
    title: "Report card assistance",
    body: "AI-drafted comments your teachers review and personalise — turning days of writing into hours of reviewing, with a teacher's judgement on every line.",
  },
  {
    title: "Student support monitoring",
    body: "Earlier visibility into students who may need help, so teachers can act during the term rather than discover the problem in end-of-term results.",
  },
];

export default function Expansion() {
  return (
    <section className="reveal" aria-labelledby="expansion-heading">
      <p className="eyebrow">Also available for established clients</p>
      <h2 id="expansion-heading">
        Once fees run smoothly, the same approach improves the rest of your
        operations.
      </h2>
      <div className="expansion">
        {offerings.map((o) => (
          <div className="exp-card" key={o.title}>
            <h3>{o.title}</h3>
            <p>{o.body}</p>
          </div>
        ))}
      </div>
      <p className="exp-note">
        I introduce these only after the fee system has proven itself at your
        school — usually from the second term of working together.
      </p>
    </section>
  );
}
