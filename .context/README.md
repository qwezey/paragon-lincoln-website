# Context & Source Material for AI Code Assistants

This folder contains the master site hierarchy, copy, visual assets, and reference material for building the **Paragon Lincoln Engineering (PARAGON)** website.

## 1. Master Copy & Content Source
* **`documents/Final-Website-Paragon-V2.docx`**: The primary source of truth for all page text, section content, company information, contact numbers, and service descriptions.
* **`documents/Structure-of-Website.docx`**: The master blueprint for site navigation and routing hierarchy.
* **Note on Document Formatting**: The color scheme legends in the `.docx` header notes (e.g., "Red- Headers; Blue – Headings") are internal document formatting guides, NOT web design specifications. Web UI styling should follow modern engineering firm aesthetics unless explicit brand guidelines are provided.

## 2. Global Context
* **Company Name**: Paragon Lincoln Engineering (PARAGON / PLE)
* **Target Geographies**: New York State (NYS), New York City (NYC), and New Jersey (NJ)
* **Core Disciplines**: Civil & Structural Engineering, Project Management, Construction Inspection, Construction Management, and Information Technology

## 3. Image & Logo Usage Guide (`branding-assets/`)

### Logo (`branding-assets/logos/`)
* **`Logo2ParagonLE.svg`**: The primary vector logo file to be used across the main website header, navigation bar, and footer.

### Reference Images (`branding-assets/reference-images/`)
Use these specific visual assets when constructing page layouts, hero sections, and service cards:

| Category / Department | Image File Name |
| :--- | :--- |
| **Civil & Structural** | `Structural-Engineering-1.jpg` |
| | `Bridge-Design-1.png` |
| | `Site-Development-Designs-1.jpg` |
| **Construction Inspection & Safety** | `Quality-Control-Field-Inspections-1.jpg` |
| | `Construction-Safety-OHSA-Compliance-1.jpg` |
| | `Residential-Site-Inspections-1.png` |
| | `Residential-Site-Inspections-2.png` |
| | `Residential-Site-Inspections-3.png` |
| **Construction Management** | `Construction-Management-1.png` |
| | `Construction-Management-2.png` |
| | `Construction-Management-3.png` |
| | `Construction-Management-for-Developers-1.png` |
| **Project Management** | `Project-Management-1.png` |
| | `Construction-Project-Management-1.jpg` |
| | `Construction-Project-Management-2.jpg` |
| **Engineering Designs** | `Engineering-Designs-1.jpg` |
| **Information Tech (IT) & AI** | `AI-Integration-1.jpg` |
| | `AI-Integration-2.jpg` |
| | `Cloud-Integration-1.jpg` |
| | `Computer-Technology-1.png` |
| | `IT-Help-Support-1.jpg` |
| | `IT-Solutions-1.jpg` |
| | `Internet-Security-1.jpg` |
| | `Networking-1.jpg` |
| | `Networking-2.jpg` |
| | `Servers-Setup-1.png` |

## 4. Key Functional Features & Architecture
* **Static Department Blogs**: Provide a simple, developer-managed blog layout capable of serving static articles for each core service area (Civil/Structural, Project Management, Inspection, Construction Management, IT).
* **No Dynamic CMS**: The blog will NOT use an admin panel or dynamic backend CMS. Articles will be manually added directly to the codebase (e.g., via static Markdown, JSON, or MDX content files) by the developer upon request.