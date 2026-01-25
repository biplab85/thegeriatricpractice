# thegeriatricpractice Website Rebuild – Updated Business Plan (Codex + shadcn/ui)

## 1. Executive Summary
**Project Name:** thegeriatricpractice Digital Rebuild  
**Project Type:** Design & Technology Rebuild (Content Preserved)  
**Objective:** Rebuild the existing Age-Link website using modern, scalable code with Codex assistance, **shadcn/ui components**, and **SCSS variables**, while preserving 100% of the original website content.

---

## 2. Scope Definition
### In Scope
- Full website rebuild using modern frontend architecture
- Reuse all existing text content from https://www.thegeriatricpractice.sg/index.html (no rewriting)
- UI implementation using **shadcn/ui**
- Styling via **SCSS variables + design tokens**
- Improved UX for seniors and caregivers
- Performance, accessibility, and SEO optimization
- Codex-assisted code generation

### Out of Scope
- Content rewriting or medical text changes
- Branding name change (unless requested)
- Backend-heavy systems at launch

---

## 3. Business Goals
- Modernize visual identity while keeping trust intact
- Reduce long-term maintenance cost
- Increase appointment inquiries
- Enable scalable healthcare UI framework
- Create a reusable clinic website foundation

---

## 4. Target Audience
- Older adults (60+)
- Family members & caregivers
- Healthcare partners and referrers

UX priorities:
- Large readable typography
- Clear CTAs
- High contrast
- Minimal cognitive load

---

## 5. Value Proposition
| Current Website | Rebuilt Platform |
|----------------|----------------|
| Static UI | shadcn/ui component system |
| Hard-coded styles | SCSS variables & tokens |
| Limited scalability | Modular architecture |
| Manual updates | Codex-assisted workflow |

---

## 6. Content Strategy
- All content sourced directly from age-link.com
- Content separated from layout
- Section-based mapping:
  - Hero
  - Services
  - Doctor Profile
  - Care Philosophy
  - CTA & Contact

This ensures future redesigns without touching content.

---

## 7. Design System Strategy
### UI Framework
- **shadcn/ui** for:
  - Buttons
  - Cards
  - Typography
  - Forms
  - Dialogs

### Styling Approach
- SCSS variables for:
  - Colors
  - Spacing
  - Font sizes
  - Border radius
- Variables act as **design tokens**

Example:
```scss
$color-primary: #c60813;
$color-secondary: #312424;
$radius-base: 12px;
```

---

## 8. Technology Stack
- Framework: Next.js (React)
- UI: shadcn/ui
- Styling: SCSS + CSS variables
- AI Assistance: OpenAI Codex
- Hosting: Vercel / Cloud Hosting

### Icons & Images
- Icons: react-icons only 
- Use this same placeholderImg.jpg. images: placeholderImg.jpg for all missing visuals
- All icon and image styling controlled via SCSS variables
- Use SVG if needed
---

## 9. Development Architecture
- Component-based UI
- shadcn components extended via SCSS
- Content-driven sections
- Accessibility-first layout (WCAG-inspired)

Folder structure example:
```
/components
  /ui (shadcn)
  /sections
/styles
  _variables.scss
/content
/pages
```

---

## 10. Monetization (Future-Ready)
- Online appointment booking
- Telemedicine services
- Caregiver education programs
- Premium healthcare resources

(No monetization required at launch)

---

## 11. Timeline
### Phase 1 – Planning
- Content audit
- Design token setup
- shadcn/ui base install

### Phase 2 – Development
- Page-by-page rebuild
- Responsive & accessibility tuning

### Phase 3 – Launch
- QA & SEO checks
- Production deployment

---

## 12. KPIs
- Page load performance
- Mobile usability score
- Appointment inquiry rate
- Bounce rate
- Accessibility score

---

## 13. Risk & Mitigation
| Risk | Mitigation |
|-----|-----------|
| UI inconsistency | Central SCSS variables |
| Scope creep | Locked content policy |
| Accessibility issues | shadcn + testing |

---

## 14. Long-Term Vision
- White-label healthcare UI kit
- Expand to multiple clinics
- Add patient portal
- AI-assisted caregiver support

---

## 15. Conclusion
This rebuild positions Age-Link as a **modern, maintainable, and scalable healthcare platform**, combining trusted medical content with shadcn/ui, SCSS-driven design tokens, and Codex-powered development.
