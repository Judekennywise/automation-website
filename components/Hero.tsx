import { waDemoLink } from "@/lib/site";

export default function Hero() {
  return (
    <div className="hero">
      <div>
        <p className="eyebrow">For private schools in Lagos</p>
        <h1>
          Fees collected on time. Parents answered promptly.{" "}
          <em>Staff freed to focus on students.</em>
        </h1>
        <p className="lede">
          I build the systems behind well-run private schools — starting with
          professional fee follow-up that improves collections without a single
          awkward phone call from your staff.
        </p>
        <div className="cta-row">
          <a className="btn" href={waDemoLink}>
            See the fee system — 15-minute demo
          </a>
          <a className="btn btn-quiet" href="#system">
            How it works
          </a>
          <span className="cta-note">
            Demos run over WhatsApp or Google Meet, at a time that suits your
            term calendar.
          </span>
        </div>
      </div>

      <div>
        <div
          className="phone"
          role="img"
          aria-label="Example WhatsApp conversation: a polite fee reminder from the school and a parent replying that payment has been made."
        >
          <div className="phone-top">
            <div className="phone-avatar" aria-hidden="true">
              GS
            </div>
            <div>
              <div className="school">Greenfield Schools — Bursary</div>
              <div className="status">online</div>
            </div>
          </div>
          <div className="phone-body">
            <div className="bubble out">
              Good morning, Mrs Adeyemi. A gentle reminder that Tolu&rsquo;s
              second-term fees (₦185,000) fall due this Friday, 10 July. You
              can pay by transfer to the school account or at the bursary.
              Thank you for being part of the Greenfield family. 🌱
              <span className="time">9:02 AM</span>
            </div>
            <div className="bubble in">
              Good morning. Thank you for the reminder — I&rsquo;ve just made
              the transfer now.
              <span className="time">9:47 AM</span>
            </div>
            <div className="bubble out">
              Received with thanks, Mrs Adeyemi. Your receipt is attached.
              Wishing Tolu a great week!
              <span className="time">9:51 AM</span>
            </div>
          </div>
        </div>
        <p className="phone-caption">
          Sent automatically · Reviewed by your bursar · In your school&rsquo;s
          voice
        </p>
      </div>
    </div>
  );
}
