import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="reveal" aria-labelledby="about-heading">
      <p className="eyebrow">About</p>
      <div className="about-grid">
        {/*
          Replace with a real photo via next/image once available, e.g.:
          <Image src="/jude.jpg" alt="Jude, in a school office" width={300} height={375} />
          A real photo matters more than any line of copy on this page.
        */}
        <div className="portrait">
          [ Your photo here — a real one, in a school or office setting. It
          matters more than any line of copy on this page. ]
        </div>
        <div>
          <h2 id="about-heading">Hi, I&rsquo;m {site.founder}.</h2>
          <div className="prose">
            <p>
              For the past three years I&rsquo;ve built systems that quietly
              remove repetitive work from organisations. I now work exclusively
              with private schools, because that&rsquo;s where the gap between
              &ldquo;buried in admin&rdquo; and &ldquo;running smoothly&rdquo;
              changes real outcomes — for staff, for parents, and for students.
            </p>
            <p>
              I work with a small number of schools at a time and build every
              system personally. That means when you call, you speak to the
              person who built it.
            </p>
          </div>
          <p className="signature-line">— {site.founder}</p>
        </div>
      </div>
    </section>
  );
}
