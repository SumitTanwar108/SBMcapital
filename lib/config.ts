export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  seo: {
    title: "Financial clarity for the next decision",
    description: "TODO | Approved search description for the firm's website.",
    keywords: ["TODO | approved keyword", "TODO | service keyword"],
    ogImage: "/office-texture.svg"
  },
  business: {
    displayName: "Usha Pinnacle Advisory",
    legalName: "Usha Pinnacle Advisory",
    tagline: "Strategy Growth Success",
    description: "A placeholder-driven consulting practice for businesses and individuals seeking practical support with compliance, accounts, and financial decisions.",
    city: "New Delhi",
    state: "Delgi",
    address: "WZ 108, Tihar Village, New Delhi",
    phone: "TODO | Official phone number",
    email: "askushapinnacleadvisory@gmail.com",
    officeHours: "9am - 6pm"
  },
  professional: {
    name: "Nitin Khanna, Jatin Khanna",
    designation: "Director",
    qualifications: "Chartered Accountant"
  },
  brand: {
    accent: "#b56a45",
    ink: "#102f40",
    paper: "#f4f0e8"
  },
  services: [
    { number: "01", title: "Tax compliance", text: "Organised support for recurring tax obligations and documentation." },
    { number: "02", title: "GST compliance", text: "Practical help with GST processes, records, and periodic requirements." },
    { number: "03", title: "Accounts and bookkeeping", text: "Clear books and useful reporting for everyday business decisions." },
    { number: "04", title: "Business advisory", text: "Thoughtful financial context for planning, operations, and growth." }
  ]
} as const;

export const contactOptions = siteConfig.services.map((service) => service.title);
