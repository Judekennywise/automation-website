import { site, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div>
        © {new Date().getFullYear()} {site.founder} · {site.shortName} —{" "}
        {site.location}
      </div>
      <nav aria-label="Footer">
        <a href="#system">Demo</a>
        <a href="#about">About</a>
        <a href="#data">Data &amp; privacy</a>
        <a href={waLink("Hello Jude, I found your website.")}>WhatsApp</a>
        <a href={`mailto:${site.email}`}>Email</a>
        <a href={site.linkedin}>LinkedIn</a>
      </nav>
    </footer>
  );
}
