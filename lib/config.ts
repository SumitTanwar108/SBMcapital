export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  seo: {
    title: "Clarity for the next decision",
    description: "Business consultancy in New Delhi led by Chartered Accountants, offering end-to-end support across tax, GST, accounts, corporate, regulatory, risk, and business advisory services.",
    keywords: ["Business consultancy New Delhi", "Chartered Accountant New Delhi", "GST compliance", "tax compliance India", "business advisory", "corporate compliance services"]
  },
  business: {
    displayName: "Usha Pinnacle Advisory",
    legalName: "Usha Pinnacle Advisory",
    tagline: "Strategy Growth Success",
    description: "Usha Pinnacle Advisory is a business consultancy in New Delhi, led by Chartered Accountants Nitin Khanna and Jatin Khanna. We work across tax, GST, accounts, corporate and regulatory compliance, risk, and the wider advisory needs of a growing business.",
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
    accent: "#c1642a",
    ink: "#16233b",
    paper: "#f2f4ec"
  },
  content: {
    home: {
      heroIntro: "Financial, legal, and strategic advisory for businesses navigating regulatory complexity, operational pressure, and growth decisions.",
      welcomeTitle: "Welcome to Usha Pinnacle Advisory",
      welcomeParagraphs: [
        "In today's dynamic economic landscape, businesses face an unprecedented array of regulatory complexities, financial decisions, and operational challenges. At Usha Pinnacle Advisory, we established this firm with a singular, clear purpose: to serve as a reliable anchor and growth catalyst for enterprises navigating this intricate corporate environment.",
        "Our journey is built on the bedrock of trust, integrity, and deep domain expertise. We take pride in being an Indian firm that understands the heartbeat of domestic businesses, while also supporting national and multinational corporations with the structure and rigour they need.",
        "We do not view ourselves merely as consultants, but as long-term strategic partners. Whether you are an emerging enterprise aiming to scale, or an established corporation managing complex regulatory compliance, our legal and financial team is committed to delivering tailored, future-ready solutions that protect and propel your business.",
        "Thank you for placing your trust in Usha Pinnacle Advisory. We look forward to partnering with you on your journey toward sustainable growth and institutional success."
      ],
      focusAreas: ["Regulatory clarity", "Financial stewardship", "Strategic growth planning"]
    },
    about: {
      overview: "Usha Pinnacle Advisory is a premier consulting firm in India, specialising in comprehensive financial, legal and strategic advisory services for national and multinational corporations. Driven by a commitment to excellence, we deliver a sophisticated suite of professional solutions precisely tailored to navigate the dynamic complexities of modern corporate environments.",
      mission: "Our mission is to empower enterprises through expert guidance, innovative frameworks, and steadfast support, enabling them to seamlessly navigate the intricacies of the marketplace. We are dedicated to fostering enduring client partnerships, delivering exceptional value, and driving sustainable growth for all stakeholders.",
      vision: "Our vision is to be the premier trusted partner for businesses seeking integrated consultancy services across India and the global marketplace. We aspire to benchmark new standards of industry excellence, continually expanding our capabilities to catalyze the long-term success, regulatory resilience, and prosperity of our clients and communities.",
      values: [
        {
          title: "Integrity",
          text: "Upholding the highest benchmarks of ethics, transparency, and professional responsibility in every engagement."
        },
        {
          title: "Excellence",
          text: "Committing to flawless execution and the highest quality of service delivery."
        },
        {
          title: "Innovation",
          text: "Fostering a forward-thinking culture to design agile, future-ready business solutions."
        },
        {
          title: "Client-Centricity",
          text: "Aligning our strategies perfectly with our clients objectives to ensure impactful results."
        }
      ],
      strategicPillars: "Usha Pinnacle Advisory caters to a sophisticated clientele, ranging from emerging enterprises to large-scale corporations across diverse industry verticals. Our deep domain expertise and nuanced industry knowledge empower us to engineer bespoke solutions that resolve complex regulatory and operational challenges. With a proven track record in accelerating corporate growth, ensuring rigorous regulatory compliance, and facilitating seamless market expansion, we serve as a trusted catalyst for institutional success."
    }
  },
  services: [
    {
      title: "Regulatory Certifications",
      text: "Registrations, approvals, and sector-specific compliance support for regulated products and businesses.",
      categories: [
        {
          title: "BIS Certification",
          items: [
            { name: "CRS Certification for Electronics and IT Products", detail: "Support with BIS compulsory registration for electronics and IT products." },
            { name: "ISI Certification for Domestic Manufacturer", detail: "Assistance with ISI certification for domestic manufacturers." },
            { name: "ISI Certification for Foreign Manufacturer (FMCS)", detail: "Assistance with the foreign manufacturer certification scheme." },
            { name: "Hall Mark Registration", detail: "Support for hall mark registration requirements." },
            { name: "BIS Certificate of Conformity (COC)", detail: "Preparation and filing for BIS certificate of conformity." }
          ]
        },
        {
          title: "EPR Registration (Waste Management)",
          items: [
            { name: "EPR Registration under Electronic Waste Management", detail: "Support for electronic waste EPR registration." },
            { name: "EPR Registration under Plastic Waste Management", detail: "Support for plastic waste EPR registration." },
            { name: "EPR Registration under Battery Waste Management", detail: "Support for battery waste EPR registration." },
            { name: "EPR Registration under Tyre Waste Management", detail: "Support for tyre waste EPR registration." }
          ]
        },
        {
          title: "CDSCO Certification",
          items: [
            { name: "Cosmetics Registration (COS-2, Manufacturing & Loan License)", detail: "Assistance with cosmetics registration and related licences." },
            { name: "Medical Device Registration (MD15, MD 42, Manufacturing License)", detail: "Assistance with medical device registration and manufacturing licences." },
            { name: "Whole Sale & Drug License", detail: "Support for wholesale and drug licence applications." },
            { name: "ISO Certification", detail: "Support with ISO certification documentation." }
          ]
        },
        {
          title: "MTCTE Approval",
          items: [
            { name: "TEC Approval", detail: "Support for telecom equipment approval requirements." }
          ]
        },
        {
          title: "AERB Approval for Radiation Safety",
          items: [
            { name: "AERB Type Approval or NOC", detail: "Assistance with radiation safety approval or no-objection documentation." }
          ]
        },
        {
          title: "Legal Metrology",
          items: [
            { name: "LMPC/PCR/Rule 27 or Packaged Commodity Registration", detail: "Support for packaged commodity registration requirements." },
            { name: "Importer License (Section 19)", detail: "Assistance with importer licence filing and support." },
            { name: "Model Approval (Section 22)", detail: "Support with model approval applications." },
            { name: "Dealer License & Repairer License", detail: "Support with dealer and repairer licensing." },
            { name: "Stamping & Verification", detail: "Support for stamping and verification requirements." }
          ]
        },
        {
          title: "WPC-ETA Certification",
          items: [
            { name: "WPC-ETA Approval", detail: "Support for WPC-ETA approval applications." },
            { name: "Demonstration License", detail: "Assistance with demonstration licence filings." },
            { name: "Dealer Possession License", detail: "Assistance with dealer possession licence filings." }
          ]
        }
      ]
    },
    {
      title: "Direct & Indirect Tax",
      text: "Recurring tax support across GST, income tax, and transfer pricing.",
      categories: [
        {
          title: "GST Services",
          items: [
            { name: "GST Registration", detail: "Support with GST registration and GSTIN setup." },
            { name: "GST Return Filing", detail: "Preparation and filing of GST returns." },
            { name: "GST Assessment and Disputes", detail: "Support with GST assessments, notices, and disputes." },
            { name: "GST Refunds", detail: "Assistance with GST refund applications and follow-up." }
          ]
        },
        {
          title: "Taxation",
          items: [
            { name: "Corporate Income Tax", detail: "Support for corporate income tax compliance and filing." },
            { name: "Individual Tax", detail: "Support for individual income tax computation and filing." },
            { name: "Expatriate Tax", detail: "Support for expatriate taxation matters." }
          ]
        },
        {
          title: "Transfer Pricing",
          items: [
            { name: "Transfer Pricing", detail: "Support for transfer pricing documentation and advisory." }
          ]
        }
      ]
    },
    {
      title: "Secretarial & Legal Services",
      text: "Corporate compliance, entity setup, and legal support for routine business matters.",
      categories: [
        {
          title: "Secretarial Compliance",
          items: [
            { name: "Preparation & Filing of Annual Returns & Financial Statements", detail: "Support with annual filings and financial statement submissions." },
            { name: "Maintaining Statutory Registers & Records", detail: "Support for statutory registers and records maintenance." },
            { name: "Board & General Meeting Support (Minutes, Resolutions, Notices)", detail: "Assistance with meeting documentation and statutory support." },
            { name: "Filing of Forms with Ministry of Corporate Affairs (MCA)", detail: "Support with MCA form filings." }
          ]
        },
        {
          title: "Legal Services",
          items: [
            { name: "Drafting & Review of Contracts (Supply, Service, Partnership, etc.)", detail: "Support with drafting and reviewing business contracts." },
            { name: "Corporate Litigation & Dispute Resolution (Civil & Commercial)", detail: "Support for corporate litigation and dispute resolution." },
            { name: "Data Privacy & Cybersecurity Compliance", detail: "Advisory support for data privacy and cybersecurity compliance." },
            { name: "Legal Opinions on Corporate & Business Matters", detail: "Support with legal opinions on corporate and business issues." },
            { name: "Legal Support for Startups & Foreign Businesses in India", detail: "Support for startups and foreign businesses operating in India." }
          ]
        },
        {
          title: "Company Compliance",
          items: [
            { name: "Director KYC & Compliance with DIN Requirements", detail: "Support with director KYC and DIN compliance." },
            { name: "Changes in Share Capital, Share Transfers, & Issue of Share Certificates", detail: "Support for share capital and share transfer compliance." },
            { name: "Filing of Charges & Creation of Security", detail: "Support with charge creation and filing requirements." },
            { name: "Foreign Direct Investment (FDI) Compliance", detail: "Support for FDI compliance matters." },
            { name: "Annual Compliance for Listed & Unlisted Companies", detail: "Support with annual compliance requirements for companies." }
          ]
        },
        {
          title: "New Business Entity Setup in India",
          items: [
            { name: "Company Incorporation & Registration (Private Limited, Public Limited, LLP, etc.)", detail: "Support with business entity incorporation and registration." },
            { name: "Compliance with Companies Act, 2013", detail: "Support for initial Companies Act compliance requirements." }
          ]
        }
      ]
    },
    {
      title: "Risk Assurance",
      text: "Internal controls, audits, and forensic review support.",
      categories: [
        {
          title: "Risk Assurance Services",
          items: [
            { name: "Internal Audit & Controls", detail: "Support with internal audit and control reviews." },
            { name: "ICFR (Internal Controls over Financial Reporting)", detail: "Support for internal controls over financial reporting." }
          ]
        },
        {
          title: "Audits",
          items: [
            { name: "Regulatory Compliance Audits", detail: "Support for regulatory compliance audits." },
            { name: "Stock & Inventory Audits", detail: "Support for stock and inventory verification audits." },
            { name: "Financial & Operational Risk Reviews", detail: "Support for financial and operational risk reviews." },
            { name: "Cybersecurity Risk Assessment", detail: "Support for cybersecurity risk assessment reviews." }
          ]
        },
        {
          title: "Forensic Investigation",
          items: [
            { name: "Fraud Detection & Prevention", detail: "Support with fraud detection and prevention reviews." },
            { name: "Risk Assessment & Management", detail: "Support for risk assessment and management work." }
          ]
        }
      ]
    },
    {
      title: "Customs & Warehousing",
      text: "Import-export coordination, customs clearance, and warehousing support.",
      categories: [
        {
          title: "Logistics Services",
          items: [
            { name: "DGFT NOC (Directorate General of Foreign Trade) Clearance", detail: "Support with DGFT NOC clearance requirements." },
            { name: "CHA Services (Customs House Agent)", detail: "Coordination with customs house agents for clearance support." },
            { name: "Logistics & Supply Chain Management", detail: "Support with logistics and supply chain coordination." },
            { name: "Warehousing Solutions & Inventory Management", detail: "Support for warehousing and inventory management." }
          ]
        },
        {
          title: "Customs Clearance Services",
          items: [
            { name: "Customs Compliance & Documentation", detail: "Support with customs compliance and documentation." }
          ]
        },
        {
          title: "Special Valuation Branch",
          items: [
            { name: "SVB (Special Valuation Branch) Services", detail: "Support for SVB proceedings and compliance." }
          ]
        },
        {
          title: "Authorised Economic Operator Program",
          items: [
            { name: "AEO Certification (Authorized Economic Operator)", detail: "Support for AEO certification applications." }
          ]
        }
      ]
    },
    {
      title: "IPR (Trade Mark, Copyright & Patent)",
      text: "Trademark, copyright, and patent support across the IP lifecycle.",
      categories: [
        {
          title: "IPR Representation",
          items: [
            { name: "Drafting Reply & Objection Handling", detail: "Support with drafting replies and handling objections." },
            { name: "Legal Appearance & Representation", detail: "Support for legal appearance and representation matters." },
            { name: "Copyright Infringement", detail: "Support with copyright infringement matters." }
          ]
        },
        {
          title: "Intellectual Property Right Services",
          items: [
            { name: "Trade Mark Research", detail: "Support with trademark research and clearance checks." },
            { name: "Fresh Trade Mark Registration", detail: "Support with fresh trademark registration applications." }
          ]
        },
        {
          title: "Patent",
          items: [
            { name: "Patent", detail: "Support with patent filing and related applications." }
          ]
        }
      ]
    },
    {
      title: "Global Accounting",
      text: "Accounting, reporting, and cross-border transaction support.",
      categories: [
        {
          title: "Financial Reporting & Advisory",
          items: [
            { name: "Financial Reporting & Statement Preparation", detail: "Support with financial reporting and statement preparation." },
            { name: "Management Reporting & Financial Analysis", detail: "Support with management reporting and financial analysis." }
          ]
        },
        {
          title: "General Accounting & Book Keep Services",
          items: [
            { name: "Bookkeeping & Accounting Outsourcing", detail: "Support with bookkeeping and accounting outsourcing." }
          ]
        },
        {
          title: "Exim Advisory",
          items: [
            { name: "Cross-Border Transaction Advisory", detail: "Support with cross-border transaction advisory." }
          ]
        }
      ]
    },
    {
      title: "Payroll & Treasury",
      text: "Payroll administration, treasury operations, and employee tax support.",
      categories: [
        {
          title: "Treasury Management Services",
          items: [
            { name: "Treasury Management & Cash Flow Optimization", detail: "Support with treasury management and cash flow optimisation." },
            { name: "Cash Forecasting & Liquidity Management", detail: "Support with cash forecasting and liquidity management." },
            { name: "Foreign Exchange & Hedging Solutions", detail: "Support for foreign exchange and hedging coordination." },
            { name: "Bank Reconciliation & Payment Processing", detail: "Support with bank reconciliation and payment processing." },
            { name: "Regulatory Compliance (EPF, ESI, etc.)", detail: "Support for payroll-related regulatory compliance." },
            { name: "Salary Structuring & Tax Planning", detail: "Support with salary structuring and tax planning." }
          ]
        },
        {
          title: "Individual Taxation (HNI and Other Individuals)",
          items: [
            { name: "Tax Computation & Filing (Income Tax, TDS)", detail: "Support with individual tax computation and filing." },
            { name: "Employee Benefits & Reimbursement Management", detail: "Support with employee benefits and reimbursements." },
            { name: "Payroll Outsourcing & Management", detail: "Support with payroll outsourcing and management." }
          ]
        },
        {
          title: "Talent Acquisition & Payroll Management",
          items: [
            { name: "Payroll Processing & Compliance", detail: "Support with payroll processing and compliance." }
          ]
        }
      ]
    }
  ]
} as const;

export const contactOptions = siteConfig.services.map((service) => service.title);
