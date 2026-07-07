import type { Metadata } from "next";
import { Young_Serif, Spline_Sans, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Spline_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Fees collected on time`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "school fee collection",
    "fee follow-up",
    "private schools Lagos",
    "school systems",
    "parent communication",
  ],
  openGraph: {
    title: `${site.name} — Fees collected on time`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${site.name} — Fees collected on time`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  founder: { "@type": "Person", name: site.founder },
  areaServed: { "@type": "City", name: "Lagos" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  knowsAbout: [
    "School fee collection",
    "Parent communication",
    "School administration systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
