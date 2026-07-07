import { waPilotLink } from "@/lib/site";

export default function Pilot() {
  return (
    <section id="pilot" className="reveal" aria-labelledby="pilot-heading">
      <div className="pilot">
        <p className="eyebrow">Pilot schools — this term</p>
        <h2 id="pilot-heading">
          I&rsquo;m onboarding three pilot schools at reduced rates.
        </h2>
        <p>
          In exchange for honest feedback and a testimonial, pilot schools get
          the full fee follow-up system set up, run, and refined for one term.
          If it doesn&rsquo;t measurably improve your collections, you owe
          nothing further. Watch the demo, then let&rsquo;s talk about your
          school&rsquo;s fee cycle.
        </p>
        <a className="btn" href={waPilotLink}>
          Ask about a pilot place
        </a>
        <p className="slots">3 PLACES · CURRENT TERM · LAGOS &amp; ENVIRONS</p>
      </div>
    </section>
  );
}
