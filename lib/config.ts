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
  services: [
    {
      title: "Tax compliance",
      text: "Organised support for recurring tax obligations and documentation. We track deadlines, prepare filings, and keep records in order so nothing gets missed.",
      subServices: [
        { name: "Income tax return filing", detail: "Preparing and filing annual returns for individuals, firms, and companies." },
        { name: "Advance tax computation", detail: "Working out quarterly advance tax liability to avoid interest and penalties." },
        { name: "Tax audit support", detail: "Assisting with tax audit documentation and reporting under the Income Tax Act." },
        { name: "Assessment and appeal representation", detail: "Representing you in assessments, notices, and appeal proceedings." },
        { name: "TDS and TCS compliance", detail: "Managing deduction, deposit, and return filing for TDS and TCS." },
        { name: "International taxation and transfer pricing", detail: "Advisory on cross-border transactions and transfer pricing documentation." },
        { name: "Expatriate and individual taxation", detail: "Tax planning and filing support for expatriates and high-net-worth individuals." }
      ]
    },
    {
      title: "GST compliance",
      text: "Practical help with GST processes, records, and periodic requirements. From registration to regular returns, we keep the paperwork accurate and on time.",
      subServices: [
        { name: "GST registration", detail: "Registering new businesses under GST and obtaining a GSTIN." },
        { name: "GST return filing", detail: "Preparing and filing monthly, quarterly, and annual GST returns." },
        { name: "GST assessment and dispute representation", detail: "Representing you through GST assessments, notices, and disputes." },
        { name: "GST refund processing", detail: "Preparing and following up on GST refund claims." },
        { name: "E-way bill and invoicing support", detail: "Generating e-way bills and maintaining GST-compliant invoicing." },
        { name: "GST health check and advisory", detail: "Reviewing GST processes to catch gaps before they become issues." }
      ]
    },
    {
      title: "Accounts and bookkeeping",
      text: "Clear books and useful reporting for everyday business decisions. We maintain accurate records so you always know where the business actually stands.",
      subServices: [
        { name: "Bookkeeping and ledger maintenance", detail: "Recording day-to-day transactions and maintaining accurate ledgers." },
        { name: "Financial statement preparation", detail: "Preparing profit and loss statements, balance sheets, and cash flow statements." },
        { name: "MIS reporting and financial analysis", detail: "Regular management reports and analysis that summarise business performance." },
        { name: "Bank reconciliation", detail: "Matching book records against bank statements to catch discrepancies early." },
        { name: "Accounts payable and receivable management", detail: "Tracking what the business owes and what it's owed." },
        { name: "Cross-border transaction and accounting advisory", detail: "Support with accounting for international and cross-border transactions." }
      ]
    },
    {
      title: "Business advisory",
      text: "Thoughtful financial context for planning, operations, and growth. We help translate the numbers into decisions you can act on with confidence.",
      subServices: [
        { name: "Budgeting and forecasting", detail: "Building realistic budgets and forward-looking financial forecasts." },
        { name: "Business structuring", detail: "Advising on the right legal and financial structure for the business." },
        { name: "Cash flow planning", detail: "Planning cash inflows and outflows to avoid short-term shortfalls." },
        { name: "Growth and expansion advisory", detail: "Financial guidance for entering new markets or scaling operations." },
        { name: "Feasibility studies", detail: "Assessing whether a new venture or investment makes financial sense." },
        { name: "Management consultancy", detail: "Practical input on operations, cost, and decision-making." }
      ]
    },
    {
      title: "Regulatory certifications",
      text: "Guidance through product and industry certification requirements. We help you understand what applies to your business and manage the process end-to-end.",
      subServices: [
        { name: "BIS certification", detail: "Support with BIS product certification, including CRS registration and ISI marks for domestic and overseas manufacturers." },
        { name: "EPR registration", detail: "Registering under Extended Producer Responsibility rules for e-waste, plastic, battery, and tyre waste." },
        { name: "CDSCO certification", detail: "Guidance through CDSCO approvals for cosmetics, medical devices, and drug wholesale licensing." },
        { name: "Telecom equipment approvals", detail: "Support with MTCTE, TEC, and WPC-ETA approvals for telecom and wireless equipment." },
        { name: "Radiation safety approvals", detail: "Assistance with AERB type approvals and no-objection certificates." },
        { name: "Legal metrology registrations", detail: "Support with packaged commodity rules, importer and dealer licensing, and verification requirements." },
        { name: "ISO and industry-specific certifications", detail: "Preparing documentation for ISO and other sector-specific approvals." }
      ]
    },
    {
      title: "Corporate and legal services",
      text: "Company formation, secretarial compliance, and contract support handled in plain, practical terms. We take care of the paperwork so you can focus on running the business.",
      subServices: [
        { name: "Company incorporation", detail: "Registering new private limited companies, public limited companies, and LLPs." },
        { name: "Secretarial compliance", detail: "Managing statutory registers, annual returns, and board and general meeting support." },
        { name: "MCA and ROC filings", detail: "Handling filings with the Ministry of Corporate Affairs, including director KYC and DIN compliance." },
        { name: "Contract drafting and review", detail: "Drafting and reviewing business contracts and agreements." },
        { name: "Corporate litigation and dispute support", detail: "Coordinating support for corporate and commercial disputes." },
        { name: "FDI and share capital compliance", detail: "Managing compliance for foreign investment, share transfers, and charges." },
        { name: "Data privacy and cybersecurity compliance", detail: "Advisory on data protection and cybersecurity compliance obligations." }
      ]
    },
    {
      title: "Risk and assurance",
      text: "Internal audits, compliance reviews, and forensic investigations, handled thoroughly and discreetly. We look closely at what's actually happening, not just what the numbers suggest.",
      subServices: [
        { name: "Internal audits and controls review", detail: "Reviewing internal processes and controls for gaps and inefficiencies." },
        { name: "Internal financial controls (ICFR)", detail: "Assessing and strengthening controls over financial reporting." },
        { name: "Statutory and regulatory compliance audits", detail: "Assisting with statutory audit preparation and compliance reviews." },
        { name: "Stock and asset verification", detail: "Physical verification of inventory and fixed assets." },
        { name: "Financial and operational risk reviews", detail: "Evaluating operational processes for weak points and risk exposure." },
        { name: "Forensic investigations", detail: "Fraud detection, risk assessment, and investigation support." }
      ]
    },
    {
      title: "Customs and logistics",
      text: "Support with customs clearance and documentation for straightforward cross-border movement of goods. We help keep shipments moving without unnecessary delays or paperwork errors.",
      subServices: [
        { name: "Customs clearance documentation", detail: "Preparing documentation for smooth import and export clearance." },
        { name: "DGFT and import-export licensing", detail: "Support obtaining DGFT no-objection certificates and trade licences." },
        { name: "Customs House Agent coordination", detail: "Coordinating customs clearance through licensed customs house agents." },
        { name: "Special Valuation Branch proceedings", detail: "Support through SVB proceedings for related-party imports." },
        { name: "Authorised Economic Operator certification", detail: "Guidance through the AEO certification process." },
        { name: "Warehousing and supply chain coordination", detail: "Coordinating storage and movement of goods through the supply chain." }
      ]
    },
    {
      title: "Intellectual property",
      text: "Trademark and copyright registration handled end-to-end, so your work stays protected. We manage the filing process and keep you informed at each stage.",
      subServices: [
        { name: "Trademark search and registration", detail: "Conducting trademark searches and filing new registrations." },
        { name: "Trademark objection and opposition handling", detail: "Representation for objections and opposition proceedings." },
        { name: "Copyright registration", detail: "Registering original creative and literary works, and handling infringement matters." },
        { name: "Patent filing support", detail: "Assisting with patent application preparation and filing." },
        { name: "IP portfolio management", detail: "Keeping track of renewals, deadlines, and IP assets." },
        { name: "Licensing and assignment agreements", detail: "Drafting agreements for licensing or transferring IP rights." }
      ]
    },
    {
      title: "Payroll and treasury",
      text: "Organised payroll processing and cash flow oversight for predictable, well-managed operations. We handle the recurring work so pay runs and cash positions stay reliable.",
      subServices: [
        { name: "Payroll processing and compliance", detail: "Running monthly payroll, payslips, and statutory deductions." },
        { name: "PF and ESI compliance", detail: "Managing Provident Fund and ESI registration and filings." },
        { name: "Cash flow and liquidity management", detail: "Monitoring cash position and forecasting short-term liquidity needs." },
        { name: "Salary structuring and tax planning", detail: "Structuring compensation to be tax-efficient and compliant." },
        { name: "Foreign exchange and treasury coordination", detail: "Coordinating foreign exchange and banking requirements." },
        { name: "Individual income tax for employees", detail: "Tax computation and filing support for salaried individuals." }
      ]
    }
  ]
} as const;

export const contactOptions = siteConfig.services.map((service) => service.title);
