export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  seo: {
    title: "Financial clarity for the next decision",
    description: "Chartered Accountancy practice in New Delhi offering tax, GST, accounts, and business advisory services, plus corporate, regulatory, and compliance support.",
    keywords: ["Chartered Accountant New Delhi", "GST compliance", "tax compliance India", "business advisory", "accounts and bookkeeping", "corporate compliance services"],
    ogImage: "/office-texture.svg"
  },
  business: {
    displayName: "Usha Pinnacle Advisory",
    legalName: "Usha Pinnacle Advisory",
    tagline: "Strategy Growth Success",
    description: "Usha Pinnacle Advisory is a Chartered Accountancy practice in New Delhi, led by Nitin Khanna and Jatin Khanna. We handle tax, GST, and accounts compliance day to day, and take on corporate, regulatory, and advisory work as it's needed.",
    city: "New Delhi",
    state: "Delhi",
    address: "WZ 108, Tihar Village, New Delhi",
    phone: "+91 9953555773",
    email: "askushapinnacleadvisory@gmail.com",
    officeHours: "9am - 6pm"
  },
  professionals: [
    {
      name: "Nitin Khanna",
      designation: "Director",
      qualifications: "Chartered Accountant (ACA)",
      bio: "Nitin Khanna is a Chartered Accountant (B.Com (H), ACA) whose background spans close to two decades in corporate finance. His experience includes serving as AGM, Corporate Accounts at LG Electronics India, where his responsibilities covered monthly financial closings, MIS reporting, internal financial controls, fixed asset management, sales accounting, and channel finance."
    },
    {
      name: "Jatin Khanna",
      designation: "Director",
      qualifications: "Chartered Accountant",
      bio: ""
    }
  ],
  brand: {
    accent: "#c1272d",
    ink: "#16233b",
    paper: "#f2f4ec"
  },
  services: [
    { code: "TX", title: "Tax compliance", text: "Organised support for recurring tax obligations and documentation. We track deadlines, prepare filings, and keep records in order so nothing gets missed." },
    { code: "GST", title: "GST compliance", text: "Practical help with GST processes, records, and periodic requirements. From registration to regular returns, we keep the paperwork accurate and on time." },
    { code: "AC", title: "Accounts and bookkeeping", text: "Clear books and useful reporting for everyday business decisions. We maintain accurate records so you always know where the business actually stands." },
    { code: "BA", title: "Business advisory", text: "Thoughtful financial context for planning, operations, and growth. We help translate the numbers into decisions you can act on with confidence." },
    { code: "RC", title: "Regulatory certifications", text: "Guidance through product and industry certification requirements, including BIS, CDSCO, and EPR filings. We help you understand what applies and manage the process end-to-end." },
    { code: "CL", title: "Corporate and legal services", text: "Company formation, secretarial compliance, and contract support handled in plain, practical terms. We take care of the paperwork so you can focus on running the business." },
    { code: "RA", title: "Risk and assurance", text: "Internal audits, compliance reviews, and forensic investigations, handled thoroughly and discreetly. We look closely at what's actually happening, not just what the numbers suggest." },
    { code: "CU", title: "Customs and logistics", text: "Support with customs clearance and documentation for straightforward cross-border movement of goods. We help keep shipments moving without unnecessary delays or paperwork errors." },
    { code: "IP", title: "Intellectual property", text: "Trademark and copyright registration handled end-to-end, so your work stays protected. We manage the filing process and keep you informed at each stage." },
    { code: "PT", title: "Payroll and treasury", text: "Organised payroll processing and cash flow oversight for predictable, well-managed operations. We handle the recurring work so pay runs and cash positions stay reliable." }
  ]
} as const;

export const contactOptions = siteConfig.services.map((service) => service.title);
