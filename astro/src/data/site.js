// Central site data extracted from .context/documents (master copy) and
// .context/branding-assets. Edit here to update copy across the site.

export const company = {
  name: 'Paragon Lincoln Engineering',
  shortName: 'PARAGON',
  tagline: 'Engineering Physical Infrastructure. Architecting Digital Intelligence.',
  disciplines:
    'Civil & Structural Engineering | Project Management | Construction Inspection | Construction Management | Information Technology',
  locations: 'NYS | NYC | NJ',
  email: 'info@paragonln.com',
  website: 'www.paragonln.com',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Sectors', href: '/sectors/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Perspective', href: '/perspective/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
];

export const contactCta = { label: 'Contact Us', href: '/contact/' };

/** Core service lines shown on the homepage and services hub. */
export const services = [
  {
    slug: 'engineering-design',
    title: 'Engineering Design Services',
    short: 'Civil & Structural Engineering',
    summary:
      'Civil and structural engineering, site development, structural analysis and design, infrastructure design, existing-structure evaluation, foundations, drainage, utilities, and related technical consulting.',
    image: 'Structural-Engineering-1.jpg',
    contactText: '732-939-7999',
    contactPhone: '732-902-7841',
    sections: [
      {
        heading: 'Civil & Structural Engineering',
        paragraphs: [
          "Paragon L Engineering provides comprehensive civil and structural engineering services for residential, commercial, industrial, institutional, infrastructure, and public-sector projects.",
          'Our services can begin with preliminary investigation and planning and continue through design development, construction documents, regulatory coordination, construction support, and evaluation of existing facilities.',
          'We work closely with owners, developers, architects, contractors, public agencies, and other project stakeholders to develop engineering solutions that are practical, constructible, code-compliant, and responsive to project requirements.',
        ],
      },
      {
        heading: 'Civil Engineering & Site Development',
        image: 'Site-Development-Designs-1.jpg',
        paragraphs: [
          'PARAGON provides civil engineering and site-development services for projects ranging from individual developments to larger residential, commercial, industrial, and public infrastructure projects.',
        ],
        list: [
          'Site planning and site development',
          'Preliminary site investigations',
          'Grading and drainage design',
          'Stormwater management',
          'Drainage systems',
          'Water supply and distribution systems',
          'Sanitary sewer design',
          'Irrigation systems',
          'Erosion and sediment control',
          'Parking design and improvements',
          'Roadway improvements',
          'Subdivision design',
          'Residential, condominium & industrial developments',
          'Infrastructure development & utility coordination',
          'Construction support, cost estimates, drawings & specifications',
        ],
        tools: 'ADS System | HCS | AutoCAD | Hydrology Studio | EPA SWMM | HydroCAD',
      },
      {
        heading: 'Structural Engineering',
        image: 'Bridge-Design-1.png',
        paragraphs: [
          'PARAGON provides structural analysis, design, evaluation, rehabilitation, and construction support for new and existing facilities.',
        ],
        list: [
          'Structural analysis, calculations & design development',
          'Steel, reinforced concrete, masonry, timber & composite design',
          'Foundation, pile, mat & retaining wall design',
          'Wind and seismic analysis and design',
          'Precast concrete & building façade design',
          'Existing-structure evaluation & rehabilitation',
          'Forensic investigations, damage assessments & expert testimony',
          'Construction support & structural inspections',
        ],
        tools: 'STAAD | GSE | EnerCalc | AutoCAD | ETABS | MIDAS',
      },
      {
        heading: 'Integrated Engineering Services',
        paragraphs: [
          'Many projects require more than one engineering discipline. PARAGON can coordinate with qualified professional firms and strategic partners to support multidisciplinary projects involving architecture, mechanical, electrical, plumbing, traffic, geotechnical, and environmental disciplines.',
        ],
      },
      {
        heading: 'Engineering Design & Construction Support',
        paragraphs: [
          "PARAGON's engineering capabilities extend beyond design, supporting construction through design clarification, field investigations, contractor coordination, shop-drawing coordination, RFI support, and constructability reviews.",
          'The objective is to develop designs that work not only on paper, but also in the field.',
        ],
      },
    ],
  },
  {
    slug: 'project-management',
    title: 'Project Management Services',
    short: 'Comprehensive Project Management & Delivery',
    summary:
      'Project planning, budgeting, scheduling, risk management, contract administration, consultant coordination, permitting, stakeholder coordination, change management, reporting, and project closeout.',
    image: 'Project-Management-1.png',
    contactText: '732-939-7999',
    contactPhone: '732-902-7841',
    sections: [
      {
        heading: 'Comprehensive Project Management & Delivery',
        paragraphs: [
          'Successful projects require disciplined management of scope, cost, schedule, risk, resources, contracts, stakeholders, quality, and project objectives.',
          'PARAGON provides project management services designed to help owners and organizations maintain control from project initiation through completion.',
        ],
      },
      {
        heading: 'Project Initiation & Planning',
        list: [
          'Project objectives & scope',
          'Execution planning & stakeholder identification',
          'Work breakdown structures & milestones',
          'Resource planning & schedules',
          'Budget development & risk identification',
          'Communication and reporting procedures',
        ],
      },
      {
        heading: 'Cost & Budget Management & Scheduling',
        image: 'Construction-Project-Management-1.jpg',
        list: [
          'Cost estimating, budgeting & cost baselines',
          'Cash-flow forecasting, tracking & variance analysis',
          'Change-order evaluation & value engineering',
          'Master scheduling, CPM & critical-path analysis',
          'Progress monitoring, delay identification & recovery planning',
        ],
        tools: 'Quickbase | MS Project | ClickUp | HubSpot | Miro | Smartsheet | Primavera P6',
      },
      {
        heading: 'Risk Management & Coordination',
        image: 'Construction-Project-Management-2.jpg',
        paragraphs: [
          'We proactively identify and address potential project risks involving technical, regulatory, environmental, construction, schedule, budget, procurement, and contractual issues.',
          'PARAGON coordinates project activities among owners, developers, architects, engineers, contractors, testing agencies, public agencies, utility companies, and other stakeholders.',
        ],
      },
      {
        heading: 'Contract & Change Management & Agile PM',
        list: [
          'Contract administration & scope management',
          'Change management & change-order review',
          'Claims coordination, submittal & RFI tracking',
          'Waterfall delivery for traditional engineering & construction projects',
          'Agile & Scrum methodologies for technology, AI, data & software projects',
          'Hybrid project-management methodologies where appropriate',
        ],
      },
      {
        heading: 'Project Execution',
        paragraphs: [
          'Initiate → Plan → Schedule → Execute → Monitor → Control → Resolve → Close Out',
          'Throughout the project we focus on scope, cost, schedule, quality, risk, communication, and documentation.',
        ],
      },
    ],
  },
  {
    slug: 'construction-inspection',
    title: 'Construction Inspection Services',
    short: 'Construction Inspection, Quality Control & Resident Engineering',
    summary:
      'Construction inspection, special inspection, resident engineering, quality-control inspection, construction documentation, field observations, progress monitoring, testing-agency coordination, and construction reporting.',
    image: 'Quality-Control-Field-Inspections-1.jpg',
    contactText: '732-939-7999',
    contactPhone: '732-902-7841',
    sections: [
      {
        heading: 'Construction Is Where Design Becomes Reality',
        paragraphs: [
          'Paragon L Engineering provides construction inspection and field services for building, residential, commercial, industrial, transportation, infrastructure, and public-sector projects.',
          'Our inspection services help owners and project teams monitor construction, verify field conditions, document progress, identify potential issues, and maintain organized project records.',
        ],
      },
      {
        heading: 'Resident Engineering Inspection',
        image: 'Residential-Site-Inspections-1.png',
        list: [
          'Pre-construction planning, plan & specification review',
          'Utility conflict identification & mitigation',
          'Construction staging & MPT review',
          'Pavement, drainage, concrete & bridge inspection',
          'Structural, reinforced-concrete & steel inspection',
          'Mechanical/HVAC & electrical inspection',
          'Construction safety recommendations',
        ],
        tools: 'Fulcrum | Fieldwire | Autodesk Build',
      },
      {
        heading: 'Construction Documentation & Quality Control Inspection',
        image: 'Residential-Site-Inspections-2.png',
        paragraphs: [
          'Document what others cannot see — before it becomes concealed.',
          'Using prepared inspection checklists, established procedures, and a systematic photographic documentation process, our trained engineer-inspectors create a dated, organized, contemporaneous record of construction conditions.',
        ],
      },
      {
        heading: 'A Permanent Record of Construction',
        image: 'Residential-Site-Inspections-3.png',
        paragraphs: [
          'A dated and indexed photographic record may assist owners, developers, builders, contractors, and project teams when questions arise after work has become concealed.',
          'Properly maintained records may also provide valuable supporting information for warranty questions, construction disputes, and future investigations.',
        ],
      },
      {
        heading: 'An Important Advantage for Developers & Homebuilders',
        paragraphs: [
          'Systematic construction documentation can provide an additional quality-assurance and transparency tool — demonstrating that critical stages of construction were observed and documented before components became concealed.',
        ],
      },
    ],
  },
  {
    slug: 'construction-management',
    title: "Construction Management Services for Homebuilders & Developers",
    short: 'Protecting Your Project, Your Schedule and Your Investment',
    summary:
      'Owner-focused construction management, field coordination, quality assurance, schedule and cost monitoring, contractor coordination, documentation, punch-list management, and project closeout for residential and development projects.',
    image: 'Construction-Management-1.png',
    contactText: '732-429-6636',
    contactPhone: '732-515-5599',
    sections: [
      {
        heading: 'What Paragon Provides',
        paragraphs: [
          "For homebuilders and developers, construction management is not simply about watching construction activities — it is about maintaining control over quality, cost, schedule, coordination, documentation, contractors, changes, and project completion.",
        ],
        list: [
          'Preconstruction & project execution planning',
          'Construction & CPM scheduling',
          'Contractor & subcontractor coordination',
          'Daily construction monitoring & field inspections',
          'Quality assurance / quality control',
          'Shop-drawing, RFI & change-order coordination',
          'Cost, schedule & pay-application monitoring',
          'Punch-list management, commissioning & closeout',
        ],
      },
      {
        heading: "Owner's Representative",
        image: 'Construction-Management-2.png',
        paragraphs: [
          "As an owner's representative, PARAGON works to protect the owner's interests throughout construction — monitoring quality, cost, schedule, coordination, documentation, and risk.",
        ],
      },
      {
        heading: 'Homebuilder Construction Quality Control',
        image: 'Construction-Management-3.png',
        paragraphs: [
          'For residential developments, PARAGON can provide a structured quality-control approach covering construction from site development through completed homes and common facilities.',
        ],
      },
      {
        heading: 'Construction Documentation as a Builder Quality Program',
        image: 'Construction-Management-for-Developers-1.png',
        paragraphs: [
          'Rather than relying solely on periodic visual observations, PARAGON can create organized records showing important construction conditions at appropriate stages — supporting warranty administration and demonstrating a commitment to quality.',
        ],
        tools: 'Quickbase | Procore | Sage Construction Management | BidOps | Primavera P6',
      },
    ],
  },
  {
    slug: 'information-technology',
    title: 'Information Technology Services',
    short: 'Technology Solutions That Keep Your Business Connected, Secure and Productive',
    summary:
      'Cloud services, network infrastructure, cybersecurity, managed IT, technical support, backup and disaster recovery, business communications, hardware, technology implementation, AI, data management, and technology project support.',
    image: 'IT-Solutions-1.jpg',
    contactText: '732-586-6367',
    contactPhone: '732-515-5599',
    sections: [
      {
        heading: 'Cloud Services',
        image: 'Cloud-Integration-1.jpg',
        list: [
          'Cloud storage & cloud backup',
          'Cloud-based applications & SaaS',
          'Virtual desktop solutions',
          'Cloud infrastructure, migration & implementation support',
        ],
      },
      {
        heading: 'Network Infrastructure & Security',
        image: 'Networking-1.jpg',
        list: [
          'Network design, configuration & monitoring',
          'Firewall implementation & management',
          'VPN solutions & access control',
          'Structured cabling & connectivity',
          'On-site technical support',
        ],
      },
      {
        heading: 'Managed IT Services',
        image: 'Servers-Setup-1.png',
        list: [
          'Network & system monitoring',
          'Hardware & endpoint management',
          'Patch management & server maintenance',
          'Security monitoring & IT reporting',
        ],
      },
      {
        heading: 'IT Support & Help Desk',
        image: 'IT-Help-Support-1.jpg',
        list: [
          'Computer & device troubleshooting',
          'Software problems & application support',
          'User-access issues & network connectivity',
          'General technical assistance',
        ],
      },
      {
        heading: 'Network Solutions',
        image: 'Networking-2.jpg',
        paragraphs: [
          'Backup & disaster recovery, remote IT support, VoIP & business communications, email & collaboration, and hardware installation & maintenance round out our managed technology capabilities.',
        ],
      },
      {
        heading: 'AI & Technology Training',
        image: 'AI-Integration-1.jpg',
        paragraphs: [
          'Technology is most valuable when employees understand how to use it effectively. PARAGON provides technology training and user guidance for new software, equipment, and cybersecurity awareness.',
        ],
      },
      {
        heading: 'AI, Data & Advanced Technology',
        image: 'AI-Integration-2.jpg',
        list: [
          'Artificial intelligence & machine learning',
          'Data analytics, management & database architecture',
          'High-performance & parallel computing',
          'Cloud computing & full-stack development',
          'Digital workflows & data-driven decision support',
        ],
      },
      {
        heading: 'Technology Platforms',
        image: 'Computer-Technology-1.png',
        tools: 'AWS | Microsoft Azure | Google Cloud | Jira | Advanced Data & Computing Frameworks',
        paragraphs: [
          'Our services can be structured as Project-Based IT Services, Co-Managed IT Support, or fully Managed IT Services.',
        ],
      },
    ],
  },
];

/** Sectors served (Sectors page). */
export const sectors = [
  {
    title: 'Commercial & Residential',
    items: ['Office buildings', 'Residential buildings & condominiums', 'Residential developments', 'Hotels', 'Shopping centers', 'Renovations & redevelopment projects'],
  },
  {
    title: 'Industrial & Manufacturing',
    items: ['Industrial facilities & warehouses', 'Industrial parks', 'Chemical facilities', 'Pharmaceutical facilities', 'Specialized industrial facilities'],
  },
  {
    title: 'Institutional',
    items: ['Schools', 'Public facilities', 'Institutional buildings', 'Community facilities'],
  },
  {
    title: 'Infrastructure & Public Works',
    items: ['Roadways & bridges', 'Transportation facilities', 'Water systems & wastewater facilities', 'Drainage systems', 'Site infrastructure & utilities'],
  },
  {
    title: 'Existing Facilities',
    items: ['Structural evaluations', 'Building inspections', 'Rehabilitation', 'Damage assessments', 'Due diligence investigations'],
  },
  {
    title: 'Technology & Business Operations',
    items: ['Cloud infrastructure & network systems', 'Data management', 'AI and machine learning', 'Business technology & digital workflows', 'IT infrastructure & technology implementation'],
  },
];

/** Representative project experience (Projects page). */
export const projectGroups = [
  {
    title: 'Structural Engineering',
    image: 'Structural-Engineering-1.jpg',
    projects: [
      {
        name: '14-Story Office Building Conversion to Luxury Residential Apartments — East Orange, New Jersey',
        description:
          'Structural engineering and civil/site design services for the conversion of an existing 14-story office building into a luxury residential apartment building, including structural analysis, steel design, foundations, wind/seismic analysis, site design, and construction documents.',
      },
      {
        name: 'Howland Hook Wharf Extensions — Staten Island, New York',
        description: 'Structural slab design and contract-document support for the Port Authority of New York and New Jersey.',
      },
      {
        name: 'Port Authority Bus Terminal — New York',
        description: 'Precast deck-panel design, 3D CADD modeling, handling and erection design, and steel lifting-frame design.',
      },
      {
        name: 'Chestnut Avenue Bridge — Village of Suffern, New York',
        description:
          'Bridge improvements involving replacement of the existing superstructure, a precast composite structural system, staged construction, and a new abutment.',
      },
    ],
  },
  {
    title: 'Value Engineering Experience',
    projects: [
      { name: 'Batchellerville Bridge Replacement over Great Sacandaga Lake — Edinburg, Saratoga County, New York' },
      { name: 'North-South Arterial Highway — Utica, New York' },
      { name: 'Sprain Brook Parkway over Route 119 — Elmsford, Westchester County, New York' },
      { name: 'Gowanus Expressway Emergency Repair & Shore Parkway Interim Deck Replacement — Kings County, New York' },
      { name: 'NY Route 17 at Exit 122 — Wallkill, Orange County, New York' },
      { name: 'I-278 Staten Island Expressway — Bus Lane Re-Designation & Extension — Richmond County, New York' },
    ],
  },
  {
    title: 'Roadway Design Projects',
    image: 'Bridge-Design-1.png',
    projects: [
      {
        name: 'Staten Island Hospital Access Road and Pedestrian Bridge',
        description:
          'Complete geometric, traffic, civil, structural, and foundation design for the roadway approaches and pedestrian bridge, including drainage, utilities, pavement, signage, and cost estimates.',
      },
      {
        name: 'North Service Road at Newark Airport — Port Authority of New York and New Jersey',
        description: 'Roadway realignment, improved intersection geometry, pavement and drainage improvements, signage, pavement markings, and construction staging.',
      },
      {
        name: 'Belt Parkway / Shore Parkway Reconstruction — Brooklyn',
        description: 'Geometric, drainage, and MPT design services including a comprehensive drainage redesign and a four-stage traffic and safety plan.',
      },
      {
        name: 'North Conduit Avenue Weaving Study — Queens',
        description:
          'Analysis of traffic operations, turning movements, and accident data using HCS and Synchro; developed and evaluated 10 alternative design concepts for NYSDOT.',
      },
      { name: 'PATCO Street Utility Reconstruction', description: 'Design alternatives, utility coordination, MPT information, permitting support, and construction documentation.' },
      { name: 'Goethals Bridge Repainting Project', description: 'Construction staging, MPT plans, traffic-control strategies, utility coordination, and permitting support.' },
    ],
  },
  {
    title: 'Site Development Design Projects',
    image: 'Site-Development-Designs-1.jpg',
    projects: [
      {
        name: 'MCMC Community Center & School — Piscataway, New Jersey',
        description:
          'Comprehensive site development and civil engineering services for a phased redevelopment, including zoning approvals, parking, traffic impact analysis, drainage, utility coordination, and construction cost estimates.',
      },
      {
        name: 'MCNJ Community Center — Fords, New Jersey',
        description: 'Upgraded an existing gravel parking area into an ADA-compliant paved facility with enhanced circulation, access, and drainage.',
      },
      {
        name: 'ICOB Community Center — Old Bridge, New Jersey',
        description: 'Civil, structural, traffic, and site development services for the conversion of two former industrial buildings into a community facility.',
      },
      {
        name: 'Private Developer Site Development Projects — New York & New Jersey',
        description: 'Subdivision and site design, drainage and retaining-wall design, bidding support, construction supervision, and scheduling for private clients.',
      },
    ],
  },
  {
    title: 'Construction Documentation — Homebuilding Projects',
    image: 'Residential-Site-Inspections-1.png',
    projects: [
      { name: 'St. Stephens, Pennsylvania — 162 Two-Bedroom Apartments', description: 'Site supervision and construction inspection for a 162-unit multifamily residential development.' },
      { name: 'Maiden Creek, Pennsylvania — 110 Luxury Townhomes', description: 'Site supervision and construction inspection for a 110-unit luxury townhome development.' },
      { name: 'Warren County, New Jersey — 414 Townhomes & Condominiums', description: 'Site supervision and construction inspection for a large-scale residential community.' },
      { name: 'Lopatcong, New Jersey — 158 Single-Family Attached Homes', description: 'Site supervision and construction inspection for a 158-home residential development.' },
      { name: "River's Edge at Delanco — Delanco, Burlington County, New Jersey — 400+ Units", description: 'Site supervision and construction inspection for a large multi-family community.' },
    ],
  },
  {
    title: 'Project Management & Inspection',
    image: 'Construction-Project-Management-2.jpg',
    projects: [
      {
        name: 'Public-Sector Program Management',
        description:
          'Managed and inspected construction projects with average annual consulting budgets of approximately $2.5 million and construction values ranging from $10 million to $50 million, for the NYC School Construction Authority (SCA), Port Authority of New York and New Jersey (PANYNJ), NYSDOT, NYC DDC, and MTA.',
      },
      {
        name: 'Construction Management and Inspection — PANYNJ',
        description: 'Multi-year construction management and inspection programs for bridges, tunnels, airports, and associated roadways; retaining-wall inspections at 10 New York City parks.',
      },
      {
        name: 'CNG Pipe & Fuel Station — Newark, New Jersey',
        description: 'Civil, mechanical, electrical, and construction inspection support involving excavation, piping, electrical power and controls, and testing.',
      },
      {
        name: 'Community Public Library — Keansburg, New Jersey',
        description: 'Construction management and support services including schedule and budget control, construction coordination, and project documentation.',
      },
    ],
  },
  {
    title: 'Information Technology Projects',
    image: 'AI-Integration-1.jpg',
    projects: [
      {
        name: 'AI 99meditations App',
        description:
          'Led development of an AI-powered journaling application, delivering the MVP in 2 months — 33% ahead of the original 3-month projected schedule.',
      },
      {
        name: 'Sabaq App Development & Scaling',
        description:
          'Developed and launched a mobile application to track student progress and strengthen parent engagement, increasing engagement from 5% to 90% and improving passing rates by 15%.',
      },
      {
        name: 'Elokey — Product Ownership Tracking Platform',
        description: 'Designed and delivered a scalable, user-centered, full-stack platform for tracking product ownership history.',
      },
      {
        name: 'Automated Request Bot',
        description: 'Developed an automated bot to identify and secure vehicle transportation requests, increasing shipping revenue by 45%.',
      },
    ],
  },
];

export const techStack = [
  { label: 'Backend Development', value: 'Node.js | Next.js' },
  { label: 'Frontend & Mobile Development', value: 'Flutter | React.js | React Native | Next.js' },
  { label: 'Cloud Platforms & Architecture', value: 'Google Cloud Platform (GCP) | Amazon Web Services (AWS) | Firebase | Serverless Design' },
  { label: 'Databases', value: 'SQL | NoSQL | CockroachDB | PostgreSQL | MongoDB | Firestore' },
  { label: 'DevOps & Deployment', value: 'GitHub Actions | Jenkins | Docker | Kubernetes | Fastlane' },
  { label: 'Programming Languages', value: 'TypeScript | JavaScript | Dart | Java | Python | C' },
  { label: 'Operating Systems', value: 'Linux | macOS | Windows' },
  { label: 'Version Control & Collaboration', value: 'Git | GitHub | GitLab' },
];

export const approach = [
  { title: 'Early Identification', text: 'Identify technical, regulatory, construction, cost, schedule, and coordination issues as early as possible.' },
  { title: 'Practical Solutions', text: 'Develop solutions that can actually be constructed and maintained.' },
  { title: 'Proactive Management', text: 'Monitor project conditions rather than simply reacting after problems occur.' },
  { title: 'Clear Documentation', text: 'Maintain organized records of decisions, construction conditions, inspections, changes, and project progress.' },
  { title: 'Technology-Enabled Delivery', text: 'Use modern engineering and digital tools to improve analysis, coordination, communication, and documentation.' },
  { title: 'Client Focus', text: "Keep the client's objectives, budget, schedule, quality requirements, and overall project success at the center of the process." },
];

export const advantage = [
  { title: 'Engineering', text: 'Licensed professional engineering capabilities in civil and structural disciplines.' },
  { title: 'Construction', text: 'Practical understanding of construction, inspection, constructability, scheduling, field conditions, and project delivery.' },
  { title: 'Project Management', text: 'Integrated management of scope, cost, schedule, contracts, risk, stakeholders, quality, and project objectives.' },
  { title: 'Technology', text: 'Modern computing, data, cloud, AI, IT, and digital capabilities supporting better analysis and informed decision-making.' },
];

export const whyParagon = [
  { title: 'Licensed Engineering Expertise', text: 'Civil and structural engineering, site development, structural analysis, infrastructure design, and existing-structure evaluation.' },
  { title: 'Construction Knowledge', text: 'We understand how designs translate into actual construction, identifying constructability issues and coordinating contractors and consultants.' },
  { title: 'Project Management', text: 'We integrate scope, cost, schedule, risk, contracts, stakeholders, quality, and project objectives into a coordinated delivery process.' },
  { title: 'Technology & Innovation', text: 'PARAGON combines traditional engineering expertise with modern IT, data analytics, artificial intelligence, and digital workflows.' },
  { title: 'Owner-Focused Service', text: "We protect our client's interests by paying close attention to quality, cost, schedule, safety, and contract compliance." },
];

export const certifications = ['Minority Business Enterprise (MBE)', 'Women Business Enterprise (WBE)', 'Small Business Enterprise (SBE)'];

/** Department blog sections — slugs align with the `services` array. */
export const departments = services.map((service) => ({
  slug: service.slug,
  title: service.title.replace(' Services', '').replace(' for Homebuilders & Developers', ''),
}));

export const pmContacts = [
  { department: 'Design Engineering | Project Management | Construction Inspection | Construction Documentation', text: '732-939-7999', phone: '732-902-7841' },
  { department: 'Homebuilder & Developer Construction Management', text: '732-429-6636', phone: '732-515-5599' },
  { department: 'Information Technology Services', text: '732-586-6367', phone: '732-515-5599' },
];
