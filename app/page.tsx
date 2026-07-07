import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import System from "@/components/System";
import Expansion from "@/components/Expansion";
import About from "@/components/About";
import Pilot from "@/components/Pilot";
import DataPrivacy from "@/components/DataPrivacy";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="wrap">
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <Header />
      <main id="top">
        <Hero />
        <Problem />
        <System />
        <Expansion />
        <About />
        <Pilot />
        <DataPrivacy />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
