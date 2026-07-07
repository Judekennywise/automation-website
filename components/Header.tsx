import { site } from "@/lib/site";

export default function Header() {
  return (
    <header>
      <a className="wordmark" href="#top">
        {site.founder} <span>·</span> {site.shortName}
      </a>
      <nav aria-label="Page">
        <a href="#system">The fee system</a>
        <a href="#about">About</a>
        <a href="#data">Data &amp; privacy</a>
        <a href="#pilot">Pilot schools</a>
      </nav>
    </header>
  );
}
