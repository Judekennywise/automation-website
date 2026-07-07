const ledgerRows = [
  { family: "Adeyemi, T.", balance: "₦0", status: "Paid in full", tag: "paid" },
  { family: "Balogun, K. & F.", balance: "₦92,500", status: "Reminder Fri", tag: "remind" },
  { family: "Chukwu, N.", balance: "₦0", status: "Paid in full", tag: "paid" },
  { family: "Danladi, A.", balance: "₦185,000", status: "Bursar to call", tag: "call" },
  { family: "Eze, O.", balance: "₦45,000", status: "Reminder sent", tag: "remind" },
  { family: "Fashola, D.", balance: "₦0", status: "Paid in full", tag: "paid" },
];

export default function System() {
  return (
    <section id="system" className="reveal" aria-labelledby="system-heading">
      <p className="eyebrow">The system</p>
      <h2 id="system-heading">
        Professional fee follow-up, working through the WhatsApp your parents
        already use.
      </h2>
      <div className="system-grid">
        <div>
          <div className="prose">
            <p>
              Timely, respectful payment reminders — sent automatically through
              WhatsApp, SMS, or email, in your school&rsquo;s voice and on your
              school&rsquo;s schedule. Your bursary team sees everything,
              approves what goes out, and steps in only where a human touch is
              needed.
            </p>
          </div>
          <ul className="checks">
            <li>
              Reminders parents don&rsquo;t resent — courteous, well-timed, and
              consistent for every family
            </li>
            <li>
              A live view of who has paid, who is pending, and who needs a
              personal call
            </li>
            <li>
              Nothing sent without your team&rsquo;s oversight — the bursar
              stays in control
            </li>
            <li>
              Fits your existing fee schedule and records; no new software for
              staff to learn
            </li>
          </ul>
          <div className="honest">
            <strong>How it works, honestly:</strong> the system drafts and
            schedules the messages; your staff review and approve them. It
            removes the repetition, not the human judgement. Your data stays
            yours — see <a href="#data">data &amp; privacy</a> below.
          </div>
        </div>

        <div>
          <div
            className="ledger"
            aria-label="Example of the live collections view the bursary team sees"
          >
            <div className="ledger-head">
              <span>Collections — Term 2</span>
              <span>Week 3</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th scope="col">Family</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {ledgerRows.map((row) => (
                  <tr key={row.family}>
                    <td>{row.family}</td>
                    <td>{row.balance}</td>
                    <td>
                      <span className={`tag ${row.tag}`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="ledger-foot">
              Illustrative data · Your bursar sees this live, updated as
              payments arrive
            </div>
          </div>

          {/*
            Replace this placeholder with the real demo walkthrough video
            (e.g. an embedded YouTube/Loom iframe or a <video> element)
            as soon as it is recorded — the strategy doc calls for the
            demo to be embedded directly on the page.
          */}
          <div className="demo-slot">
            [ 2-minute demo video goes here — a screen recording of the fee
            system sending a reminder and the bursar&rsquo;s live view ]
          </div>
        </div>
      </div>
    </section>
  );
}
