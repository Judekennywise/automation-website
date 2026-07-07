/**
 * Single place to update contact details and links.
 * Everything on the site reads from here — change the WhatsApp
 * number, email, or domain once and it updates everywhere.
 */
export const site = {
  name: "Jude · School Systems",
  shortName: "School Systems",
  founder: "Jude",
  // TODO: replace with the real production domain before deploying
  url: "https://example.com",
  // TODO: replace with the real WhatsApp Business number (country code, no +)
  whatsappNumber: "2340000000000",
  // TODO: replace with the real email address
  email: "hello@example.com",
  // TODO: replace with the real LinkedIn profile URL
  linkedin: "https://www.linkedin.com/",
  location: "Lagos, Nigeria",
  description:
    "I build the systems behind well-run private schools in Lagos — starting with professional fee follow-up that improves collections without awkward phone calls.",
};

export function waLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waDemoLink = waLink(
  "Hello Jude, I'd like to see the fee system demo."
);
export const waPilotLink = waLink(
  "Hello Jude, I'm interested in the pilot for my school."
);
