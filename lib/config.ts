export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ushapinnacleadvisory.com",
  seo: {
    title: "Clarity for the next decision",
    description: "Business consultancy, offering end-to-end support across tax, GST, accounts, corporate, regulatory, risk, and business advisory services.",
    keywords: ["Business consultancy New Delhi", "Chartered Accountant New Delhi", "GST compliance", "tax compliance India", "business advisory", "corporate compliance services"]
  },
  business: {
    displayName: "Usha Pinnacle Advisory",
    legalName: "Usha Pinnacle Advisory",
    tagline: "Strategy Growth Success",
    description: "Usha Pinnacle Advisory is a business consultancy. We work across tax, GST, accounts, corporate and regulatory compliance, risk, and the wider advisory needs of a growing business.",
    city: "New Delhi",
    state: "Delhi",
    address: "Plot No-42, Sector 13, Dwarka, New Delhi- 110075",
    addresses: [
      "Plot No-42, Sector 13, Dwarka, New Delhi- 110075",
      "WZ 108, Tihar Village, New Delhi"
    ],
    phone: "+91-9953555773",
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
      title: "Risk Assurance",
      text: "Internal controls, audits, and forensic review support.",
      categories: [
        {
          title: "Risk Assurance Services",
          text: "Strategic institutional diagnostics designed to strengthen internal operating environments, optimize financial controls, and build sustainable enterprise resilience.",
          items: [
            { name: "Internal Audit & Controls", detail: "Comprehensive internal process evaluation. We assist by mapping operational vulnerabilities, tracking leakage in transaction cycles, and deploying advanced automated internal control matrices." },
            { name: "ICFR (Internal Controls Over Financial Reporting)", detail: "Financial reporting framework engineering. We assist by auditing financial transaction recording pathways, identifying reporting weak points, and ensuring compliance with SOX and statutory metrics." }
          ]
        },
        {
          title: "Audits",
          text: "Independent, value-adding diagnostic audits crafted to provide deep operational transparency, uncover structural inefficiencies, and mitigate compliance risks.",
          items: [
            { name: "Regulatory Compliance Audits", detail: "Multi-agency regulatory alignment checks. We assist by conducting objective cross-departmental compliance gap analyses, tracking performance records, and building proactive compliance recovery plans." },
            { name: "Stock & Inventory Audits", detail: "Physical and logical asset verification. We assist by deploying accurate periodic wall-to-wall stock counting methodologies, analyzing ledger-to-floor variances, and discovering obsolete items." },
            { name: "Financial & Operational Risk Reviews", detail: "Comprehensive business vulnerability analysis. We assist by stress-testing critical business cash flow streams, auditing capital expenditure approvals, and mapping single-point-of-failure risks." },
            { name: "Cybersecurity Risk Assessment", detail: "Enterprise digital infrastructure security auditing. We assist by discovering external network vulnerabilities, evaluating employee access control rules, and testing data backup restoration pathways." }
          ]
        },
        {
          title: "Forensic Investigation",
          text: "Rigorous, data-driven financial investigations designed to uncover corporate malpractice, isolate asset diversion, and build legally defensible case portfolios.",
          items: [
            { name: "Fraud Detection & Prevention", detail: "Advanced asset-diversion detection. We assist by analyzing large datasets for unusual transaction patterns, tracing hidden fund routes, and deploying anti-fraud whistle-blower protocols." },
            { name: "Risk Assessment & Management", detail: "Crisis mitigation playbook engineering. We assist by quantifying complex operational risk exposures, drafting detailed enterprise continuity playbooks, and running interactive executive crisis simulations." }
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
          text: "Transforming transactional records into strategic accounting intelligence, ensuring full compliance with Ind-AS, IFRS, and local reporting metrics.",
          items: [
            { name: "Financial Reporting & Statement Preparation", detail: "Statutory financial statement compilation. We assist by designing compliant balance sheets, optimizing revenue recognition rules, and compiling extensive disclosure notes." },
            { name: "Management Reporting & Financial Analysis", detail: "Custom corporate business intelligence delivery. We assist by building interactive unit-economic dashboards, analyzing cost-center variances, and generating rolling working-capital metrics." }
          ]
        },
        {
          title: "General Accounting & Book Keep Services",
          text: "Scalable cloud-enabled accounting back-office services, maintaining clean, transaction-level financial records every day.",
          items: [
            { name: "Bookkeeping & Accounting Outsourcing", detail: "Comprehensive daily ledger administration. We assist by processing accounts payable tracks, managing accounts receivable invoicing, and reconciling multi-currency bank accounts." }
          ]
        },
        {
          title: "Exim Advisory",
          text: "Specialized international transaction advisory, protecting global capital transfers from complex cross-border compliance penalties.",
          items: [
            { name: "Cross-Border Transaction Advisory", detail: "Strategic inbound/outbound financial wire structuring. We assist by evaluating foreign remittance withholding taxes, auditing double-taxation relief rules, and verifying compliance with RBI export-import mandates." }
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
          text: "Advanced fiscal orchestration encompassing GST registration, precision return compliance, optimization of credit loops, and strategic defense during tax audits.",
          items: [
            { name: "GST Registration", detail: "Strategic tax registration and jurisdiction analysis. We assist by assessing proper corporate business categorization, filing multi-state applications, and addressing complex clarification requests." },
            { name: "GST Return Filing", detail: "Periodic transactional return compilation (GSTR-1, 3B, 9/9C). We assist by cross-referencing your general ledgers, processing detailed input data streams, and managing automated monthly filings." },
            { name: "GST Assessment and Disputes", detail: "Expert representation during department inquiries and show-cause notices. We assist by conducting extensive case law research, drafting formal responses, and representing you before tax tribunals." },
            { name: "GST Refunds", detail: "Recovery of accumulated input tax credits for exporters and inverted duty setups. We assist by reconciling documentation, compiling required digital credit ledgers, and defending your claims before inspectors." }
          ]
        },
        {
          title: "Taxation",
          text: "Comprehensive corporate and individual direct tax structuring, focused on ensuring full legal compliance while optimizing overall tax liability.",
          items: [
            { name: "Corporate Income Tax", detail: "Enterprise tax strategy and statutory filings. We assist by mapping complex deductible expenses, evaluating deferred tax balances, and designing highly tax-efficient corporate structures." },
            { name: "Individual Tax", detail: "High-net-worth individual (HNWI) and executive tax filing. We assist by identifying optimal investment tax breaks, consolidating diverse multi-asset investment portfolios, and submitting error-free personal tax returns." },
            { name: "Expatriate Tax", detail: "Cross-border personal tax optimization for international assignees. We assist by clarifying complex residency rules, maximizing Double Taxation Avoidance Agreements (DTAA), and managing global tax recharges." }
          ]
        },
        {
          title: "Transfer Pricing",
          text: "Strategic arms-length transaction pricing alignment, ensuring international and domestic group transfers satisfy rigorous transfer pricing audits.",
          items: [
            { name: "Transfer Pricing", detail: "Comprehensive transfer pricing studies and documentation. We assist by executing advanced economic benchmarking analyses, drafting global Local/Master files, and defending structures during tax audits." }
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
          text: "Rigorous corporate governance and secretarial tracking, protecting your organization from compliance failures under the Companies Act.",
          items: [
            { name: "Preparation & Filing of Annual Returns & Financial Statements", detail: "Statutory Ministry of Corporate Affairs (MCA) filing management. We assist by compiling compliant digital XBRL sheets, drafting comprehensive board reports, and submitting your annual returns." },
            { name: "Maintaining Statutory Registers & Records", detail: "Continuous administration of mandatory company registries. We assist by organizing real-time updates for member logs, director interest disclosures, and share allotment tracking documents." },
            { name: "Board & General Meeting Support", detail: "End-to-end management of corporate meeting procedures. We assist by formulating legally compliant agenda packets, drafting precise meeting resolutions, and compiling formal minutes." },
            { name: "Filing of Forms with MCA", detail: "Real-time compliance tracking for structural corporate updates. We assist by drafting and filing mandatory MCA forms for director changes, registered office relocations, and operational modifications." }
          ]
        },
        {
          title: "Legal Services",
          text: "Elite commercial legal advisory, dedicated to drafting bulletproof contracts, mitigating complex litigation liabilities, and protecting corporate operating freedom.",
          items: [
            { name: "Drafting & Review of Contracts", detail: "High-stakes commercial document engineering. We assist by tailoring custom vendor master contracts, structuring robust non-disclosure agreements (NDAs), and engineering deep indemnification layers." },
            { name: "Corporate Litigation & Dispute Resolution", detail: "Strategic representation for commercial court matters. We assist by designing effective dispute mitigation playbooks, drafting high-impact legal notices, and managing settlement negotiations." },
            { name: "Data Privacy & Cybersecurity Compliance", detail: "Regulatory alignment with data protection acts (e.g., DPDPA). We assist by building comprehensive enterprise data mapping inventories, drafting external privacy statements, and creating data breach response systems." },
            { name: "Legal Opinions on Corporate Matters", detail: "Defensible strategic legal counseling. We assist by analyzing complex regulatory intersection points, interpreting new corporate case law developments, and drafting definitive formal legal opinions." },
            { name: "Legal Support for Startups & Foreign Businesses in India", detail: "Cross-border operational launch blueprints. We assist by structuring tax-optimized corporate vehicles, managing complex multi-agency registrations, and handling initial operational compliance setup." }
          ]
        },
        {
          title: "Company compliance",
          text: "Continuous operational company monitoring, keeping daily corporate changes perfectly aligned with shifting corporate laws.",
          items: [
            { name: "Director KYC & Compliance with DIN Requirements", detail: "Mandatory director baseline compliance tracking. We assist by managing annual DIR-3 KYC verifications, securing digital signatures (DSC), and auditing active Director Identification Numbers (DIN)." },
            { name: "Changes in Share Capital & Share Transfers", detail: "Corporate capital restructure execution. We assist by managing capital authorization increases, drafting formal share certificates, and processing statutory filings for share updates." },
            { name: "Filing of Charges & Creation of Security", detail: "Regulatory administration for secured corporate loans. We assist by drafting formal debt hypothecation paperwork, filing MCA charge creation documents (CHG-1), and tracking satisfaction clearances." },
            { name: "FDI Compliance", detail: "Inbound cross-border financial governance. We assist by completing RBI single master form filings, tracking strict sector investment caps, and completing KYC validations for overseas investors." },
            { name: "Annual Compliance for Listed & Unlisted Companies", detail: "Holistic annual compliance tracking. We assist by organizing multi-point diagnostic legal health checks, compiling master compliance dashboards, and handling final statutory certifications." }
          ]
        },
        {
          title: "New Business Entity Setup in India",
          text: "End-to-end structural incorporation pathways, converting early business concepts into fully operational, compliant legal realities.",
          items: [
            { name: "Company Incorporation & Registration", detail: "Custom legal entity design (pvt ltd, LLP, public). We assist by running thorough name availability searches, designing tailored articles of association (AoA), and securing your final certificate of incorporation." },
            { name: "Compliance with Companies Act, 2013", detail: "Initial post-incorporation statutory compliance. We assist by facilitating your first official board meeting setup, appointing certified statutory auditors, and managing early mandatory capitalization filings." }
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
          text: "Enterprise liquidity protection, ensuring active working capital is optimized, foreign exchange risks are hedged, and banking relationships stay highly efficient.",
          items: [
            { name: "Treasury Management & Cash Flow Optimization", detail: "Strategic corporate treasury management. We assist by setting up short-term cash deployment structures, building centralized capital dashboards, and streamlining account pooling workflows." },
            { name: "Cash Forecasting & Liquidity Management", detail: "Predictive short and long-term liquidity modeling. We assist by building advanced rolling cash-inflow forecasts, stress-testing collections cycles, and structuring emergency backup lines." },
            { name: "Foreign Exchange & Hedging Solutions", detail: "Cross-border currency volatility protection. We assist by designing custom option/forward contract templates, auditing currency risk exposures, and implementing clear risk threshold alerts." },
            { name: "Bank Reconciliation & Payment Processing", detail: "Automated cash balancing systems. We assist by reconciling high-volume corporate accounts daily, tracking unusual payment variations, and securing batch transaction transfers." },
            { name: "Salary Structuring & Tax Planning", detail: "Tax-optimized payroll engineering. We assist by designing compliant allowance structures (HRA, Perquisites), evaluating new vs. old tax regime impacts, and balancing flexi-benefit plans." }
          ]
        },
        {
          title: "Individual Taxation",
          text: "Executive wealth compliance services, ensuring complex high-value compensation structures remain perfectly aligned with tax rules.",
          items: [
            { name: "Tax Computation & Filing (Income Tax, TDS)", detail: "Executive and high-net-worth tax management. We assist by computing multi-tier salary tax brackets, coordinating cross-border TDS credit alignments, and submitting clean personal returns." },
            { name: "Employee Benefits & Reimbursement Management", detail: "Compliant expenses tracking systems. We assist by designing easy digitized reimbursement review tracks, auditing fringe benefit tax risks, and validating business expense claims." },
            { name: "Payroll Outsourcing & Management", detail: "Full-cycle end-to-end payroll processing. We assist by executing monthly salary disbursements, managing automated PF/ESIC statutory deposits, and generating employee Form-16s." }
          ]
        },
        {
          title: "Talent Acquisition & Payroll Management",
          text: "Seamless integration of payroll systems and statutory employment compliance, providing an error-free work experience for your team.",
          items: [
            { name: "Payroll Processing & Compliance", detail: "Dedicated statutory labor compliance management. We assist by audit-checking monthly bonus allocations, handling statutory gratuity provisioning, and filing required state labor returns." }
          ]
        }
      ]
    },
    {
      title: "Regulatory Certifications",
      text: "Registrations, approvals, and sector-specific compliance support for regulated products and businesses.",
      categories: [
        {
          title: "BIS Certification",
          text: "Comprehensive guidance for domestic and international manufacturers to secure Bureau of Indian Standards (BIS) conformity, verifying that products meet stringent safety, quality, and performance norms.",
          items: [
            { name: "CRS Certification for Electronics and IT Products", detail: "Compulsory Registration Scheme (CRS) compliance for IT/electronic goods. We assist by managing end-to-end documentation, testing facilitation, and application tracking to accelerate market entry." },
            { name: "ISI Certification for Domestic Manufacturers", detail: "Product quality certification via the trusted ISI mark for domestic goods. We assist by orchestrating mock audits, aligning factory production controls with Indian standards, and coordinating final certification." },
            { name: "ISI Certification for Foreign Manufacturers (FMCS)", detail: "Foreign Manufacturers Certification Scheme (FMCS) enablement for global operations. We assist by handling cross-border compliance complexities, acting as your local authorized representative, and managing factory audits." },
            { name: "Hallmark Registration", detail: "Purity and quality verification for gold and silver precious articles. We assist by managing the complex paperwork, establishing authorized testing credentials, and securing official hallmark validation." },
            { name: "BIS Certificate of Conformity (CoC)", detail: "Verification for products matching specific BIS niches. We assist by streamlining the verification framework, identifying applicable testing protocols, and securing official regulatory sign-offs." }
          ]
        },
        {
          title: "EPR Registration (Waste Management)",
          text: "Strategic compliance frameworks for Extended Producer Responsibility (EPR), empowering businesses handling electronics, plastics, batteries, or tyres to satisfy statutory green mandates seamlessly.",
          items: [
            { name: "EPR Registration Under Electronic Waste Management", detail: "E-waste collection, recycling, and disposal regulation management. We assist by building actionable recycling frameworks, managing CPCB portal filings, and compiling your annual compliance records." },
            { name: "EPR Registration Under Plastic Waste Management", detail: "Recycling and reuse target tracking for plastic packaging. We assist by accurately assessing your plastic footprints, securing structural certifications, and managing required offset fulfillment strategies." },
            { name: "EPR Registration Under Battery Waste Management", detail: "Compliance mandates for battery manufacturing and retail. We assist by setting up reverse logistics blueprints, handling government portal registrations, and compiling your statutory compliance reports." },
            { name: "EPR Registration Under Tyre Waste Management", detail: "Recycling and disposal alignment for tyre ecosystems. We assist by orchestrating your waste processing agreements, validating recycler networks, and managing your legal filings." }
          ]
        },
        {
          title: "CDSCO Certification",
          text: "National regulatory facilitation under the Central Drugs Standard Control Organisation, helping medical, cosmetic, and pharmaceutical enterprises navigate strict safety, quality, and efficacy criteria.",
          items: [
            { name: "Medical Device Registration (MD-15, MD-42, Manufacturing License)", detail: "Compliance tracking for medical apparatus. We assist by designing comprehensive Technical Construction Files (TCF), filing for MD-15/MD-42 clearances, and structuring your local factory site layouts." },
            { name: "Wholesale & Drug License", detail: "Commercial distribution clearance for pharmaceuticals. We assist by verifying your facility layout, auditing pharmacist/technical credentials, and steering the application through state licensing departments." },
            { name: "ISO Certification", detail: "International standardization alignment (e.g., ISO 9001, 13485). We assist by conducting structural gap analyses, drafting Quality Manuals, and hosting certification audits." }
          ]
        },
        {
          title: "MTCTE Approval",
          text: "Expert technical evaluation and Telecommunication Engineering Centre (TEC) clearance pipelines for advanced network and telecom apparatuses.",
          items: [
            { name: "TEC Approval", detail: "Essential technical validation for telecom products. We assist by reviewing technical lab reports, preparing comprehensive paperwork, and resolving administrative testing queries." }
          ]
        },
        {
          title: "AERB Approval for Radiation Safety",
          text: "Critical safety certification via the Atomic Energy Regulatory Board for entities manufacturing, importing, or deploying radiation-emitting equipment.",
          items: [
            { name: "AERB Type Approval or NOC", detail: "Type approval and specialized clearances for diagnostic/industrial equipment. We assist by assessing equipment design compliance, coordinating specialized shielding studies, and managing portal applications." }
          ]
        },
        {
          title: "Legal Metrology",
          text: "End-to-end statutory assurance ensuring weights, measures, and retail packaging layouts align perfectly with commercial fair-trade legislation.",
          items: [
            { name: "LMPC/PCR/Rule 27 – Packaged Commodity Registration", detail: "Retail packaging text and metric alignment. We assist by auditing all retail labels, modifying declared text fields for compliance, and securing the official LMPC certificate." },
            { name: "Importer License", detail: "Import compliance setup under the Legal Metrology framework. We assist by building rigorous compliance checklists, structuring initial documentation, and steering your license through central ministries." },
            { name: "Dealer License & Repairer License", detail: "Licensing for industrial weighing instrumentation. We assist by evaluating technical workshop setups, preparing the local inspector filings, and managing the official verification." },
            { name: "Stamping & Verification", detail: "Cyclical verification of commercial measuring arrays. We assist by arranging certified local testing inspectors, executing equipment calibrations, and securing official stamping validation." }
          ]
        },
        {
          title: "WPC-ETA Certification",
          text: "Wireless Planning and Coordination (WPC) certification, enabling wireless apparatuses operating on Indian radio frequencies to achieve lightning-fast market access.",
          items: [
            { name: "WPC-ETA Approval", detail: "Equipment Type Approval for consumer RF/Bluetooth/Wi-Fi devices. We assist by evaluating international RF test reports, confirming frequency allocation rules, and handling the WPC portal filing." },
            { name: "Demonstration License", detail: "Temporary license for trade expos and proof-of-concept testing. We assist by managing time-sensitive applications, specifying restricted frequency use parameters, and handling equipment returns." },
            { name: "Dealer Possession License (DPL)", detail: "Regulatory authorization to hold and inventory RF technology. We assist by reviewing secure facility logs, completing state-level applications, and maintaining required registry records." }
          ]
        }
      ]
    },
    {
      title: "IPR (Trade Mark, Copyright & Patent)",
      text: "Trademark, copyright, and patent support across the IP lifecycle.",
      categories: [
        {
          title: "Intellectual Property Representation",
          text: "Strategic legal defense and administrative advocacy dedicated to protecting your proprietary brand assets against infringement and regulatory objections.",
          items: [
            { name: "Drafting Reply & Objection Handling", detail: "Trademark examination response engineering. We assist by analyzing examiner citation notices, gathering robust prior-use evidence, and drafting authoritative legal counter-arguments." },
            { name: "Copyright Infringement", detail: "Enforcement actions against unauthorized creative asset use. We assist by drafting formal cease-and-desist notices, tracking online digital theft violations, and managing civil damages claims." }
          ]
        },
        {
          title: "Intellectual Property Right Services",
          text: "Proactive IP portfolio building encompassing exhaustive market research, pristine registrations, and comprehensive valuation protections.",
          items: [
            { name: "TRADE MARK RESEARCH", detail: "Pre-launch brand availability forensics. We assist by scanning multi-class phonetic databases, identifying conflicting active applications, and evaluating potential structural legal challenges." },
            { name: "FRESH TRADE MARK REGISTRATION", detail: "Initial trademark portfolio filing. We assist by identifying optimal class definitions, structuring legal owner documentation, and handling formal registry submissions." }
          ]
        },
        {
          title: "Patent – Secure Your Innovations with Confidence",
          text: "Advanced utility and design patent engineering, transforming technical engineering breakthroughs into legally enforceable corporate monopolies.",
          items: [
            { name: "Patent – Secure Your Innovations with Confidence", detail: "End-to-end patent prosecution. We assist by conducting deep global prior-art patent searches, drafting comprehensive patent claims specifications, and addressing patent examiner technical queries." }
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
          text: "Comprehensive cross-border and domestic supply chain orchestration, focused on maximizing cargo transit velocity and lowering overall freight costs.",
          items: [
            { name: "DGFT NOC (Directorate General of Foreign Trade) Clearance", detail: "Specialized import-export regulatory authorization. We assist by analyzing restricted goods classifications, preparing precise DGFT digital portal filings, and managing ministry representation." },
            { name: "CHA Services (Customs House Agent)", detail: "Professional border clearance administration. We assist by verifying tariff classifications, orchestrating container physical inspections, and handling immediate cargo clearance sign-offs." },
            { name: "Logistics & Supply Chain Management", detail: "End-to-end multi-modal transport optimization. We assist by designing efficient distribution networks, auditing freight carrier service agreements, and deploying live transit-tracking systems." },
            { name: "Warehousing Solutions & Inventory Management", detail: "Strategic storage and order fulfillment design. We assist by analyzing warehouse slotting efficiency, setting up accurate stock replenishment parameters, and ensuring compliance with warehousing acts." }
          ]
        },
        {
          title: "Customs Clearance Services",
          text: "Expert international border facilitation, ensuring international shipments comply with evolving customs acts while avoiding operational delays.",
          items: [
            { name: "Customs Compliance & Documentation", detail: "Rigorous pre-shipment documentation review. We assist by auditing bills of entry, validating country-of-origin certificates, and confirming proper valuation alignments." }
          ]
        },
        {
          title: "Special Valuation Branch",
          text: "Specialized defense and structuring for related-party import transactions under the Special Valuation Branch (SVB) of customs.",
          items: [
            { name: "SVB (Special Valuation Branch) Services", detail: "Related-party transaction pricing defense. We assist by preparing extensive transfer pricing documentation for customs, building economic justification profiles, and handling SVB registry renewals." }
          ]
        },
        {
          title: "Authorised Economic Operator Program",
          text: "Global supply chain validation via the AEO tier-system framework, unlocking top-tier priority processing privileges for international traders.",
          items: [
            { name: "AEO Certification (Authorized Economic Operator)", detail: "AEO accreditation management. We assist by evaluating site security metrics, building comprehensive safety documentation, and steering your application through CBIC audit reviews." }
          ]
        }
      ]
    }
  ]
} as const;

export const contactOptions = siteConfig.services.map((service) => service.title);
