import Link from "next/link";
import { useState } from "react";
import InquiryForm from "./InquiryForm";
import ScrollReveal from "./ScrollReveal";
import PageMeta from "./PageMeta";

export default function CrystalKizorLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    
    { label: "About", href: "#about" },
    { label: "Space", href: "#spaces" },
    { label: "Learning", href: "#speaking" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#connect" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
    <PageMeta title="Crystal Kizor" description="Explore the work, ideas, and initiatives of Crystal Kizor — architect, designer, entrepreneur, speaker, researcher, and creator." />
<header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
<div className="h-20 max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg flex items-center justify-between">
<div className="flex items-center gap-space-md">
<Link className="flex items-center gap-space-sm" data-path="spaces" href="/">
<img alt="Crystal Kizor Monogram Mark" className="h-12 w-auto object-contain" src="/images/logo-bg-removed.png"/>
{/* <span className="font-headline-sm text-headline-sm tracking-tight text-primary">{"CRYSTAL KIZOR"}</span> */}
</Link>
{/* <span className="hidden lg:inline-block font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">ARCHITECT · DESIGNER · RESEARCHER</span> */}
</div>
<nav className="hidden xl:flex items-center gap-space-md" data-active-classes="text-primary font-bold border-b border-primary">
{navigationItems.map((item, index) => (
<Link aria-current={index === 0 ? "page" : undefined} className={`font-label-md text-label-md uppercase tracking-wider transition-colors py-space-xs ${0 ? "text-primary font-bold border-b border-primary" : "text-on-surface-variant hover:text-on-surface"}`} data-path={item.href.slice(1)} href={item.href} key={item.label}>{item.label}</Link>
))}
</nav>
<div className="flex items-center gap-space-sm">
<Link className="bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary px-space-sm md:px-space-md py-space-sm font-label-md text-label-md uppercase tracking-wider transition-colors inline-flex items-center" data-path="connect" href="#connect" onClick={closeMenu}>{"Work With Crystal"}</Link>
<button aria-controls="mobile-navigation" aria-expanded={isMenuOpen} aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} className="xl:hidden w-10 h-10 rounded-full border border-outline/40 text-primary flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)} type="button">
{/* <span className="material-symbols-outlined text-[20px]">{isMenuOpen ? "close" : "menu"}</span> */}
<img src="/svg/barcode.svg" alt="menu" className='w-5 h-5'/>
</button>

</div>
</div>
{isMenuOpen && (
<nav className="xl:hidden border-t border-outline/20 bg-surface px-margin md:px-margin-md py-space-md" id="mobile-navigation">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xs">
{navigationItems.map((item, index) => (
<Link aria-current={index === 0 ? "page" : undefined} className={`font-label-md text-label-md uppercase tracking-wider py-space-sm ${index === 0 ? "text-primary font-bold" : "text-on-surface-variant"}`} data-path={item.href.slice(1)} href={item.href} key={item.label} onClick={closeMenu}>{item.label}</Link>
))}
</div>
</nav>
)}
</header>
<main className="w-full pt-20 bg-surface">
<div className="flex flex-col w-full text-on-surface">
{/* 01. HERO SECTION */}
<ScrollReveal as="section" className="w-full relative px-margin md:px-margin-md lg:px-margin-lg py-space-xl bg-surface" variant="up">
<div className="max-w-7xl mx-auto ">
{/* Editorial Index & Location Stamp */}
{/* <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-lg"></div> */}
{/* Main Asymmetric Grid */}
<div className='h-[50px] lg:hidden'></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg items-center">
{/* Left: Typographic Anchoring */}

<div className="lg:col-span-7 space-y-space-lg ">
  <div className="pt-space-xs  font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant flex flex-wrap gap-x-3 gap-y-1">
<span>{"Architect"}</span>
<span>{"·"}</span>
<span>{"Designer"}</span>
<span>{"·"}</span>
<span>{"Entrepreneur"}</span>
<span>{"·"}</span>
<span>{"Researcher"}</span>
<span>{"·"}</span>
<span>{"Speaker"}</span>
</div>
<div className="space-y-space-xs">
<h1 className="font-display-lg text-display-lg text-primary tracking-tight leading-[0.95]">{"Crystal Kizor"}</h1>
</div>
{/* Disciplines Strip */}

<div className="max-w-xl pt-0">
<p className="font-headline-sm text-headline-sm text-on-surface font-light leading-relaxed">
{"A multidisciplinary force shaping spaces, ideas and opportunities across Africa and beyond. She has been building an ambitious body of work spanning architecture, design, education and entrepreneurship."}
            </p>
</div>
{/* Dual High-Contrast CTAs */}
<div className="pt-0 flex w-fit md:items-center flex-col lg:flex-row gap-x-4 gap-y-6">
<Link className="bg-primary justify-center text-on-primary hover:bg-secondary hover:text-on-secondary px-space-lg py-space-sm font-label-md text-label-md uppercase tracking-widest transition-colors inline-flex items-center gap-space-xs shadow-sm" href="#spaces">
<span>{"Explore Her Work"}</span>
<img style={{rotate:'90deg'}} className='w-5 h-5' src="/svg/arrow-f-white.svg" alt="arrow-white" />
</Link>
<Link className="bg-surface-container hover:bg-primary hover:text-on-primary text-primary px-space-lg py-space-sm font-label-md text-label-md uppercase tracking-widest transition-colors inline-flex items-center gap-space-xs" href="#speaking">
<span>{"Invite Crystal to Speak"}</span>
<img className='w-5 h-5' src="/svg/arrow-f.svg" alt="arrow-white" />

</Link>
</div>
{/* Quick Taxonomy Footnote */}
{/* <div className="pt-space-lg grid grid-cols-3 gap-space-md max-w-lg">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline block">STUDIO</span>
<span className="font-body-sm text-body-sm font-medium text-primary">COKA Architecture</span>
</div>
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline block">COLLECTION</span>
<span className="font-body-sm text-body-sm font-medium text-primary">ELEvated Objects</span>
</div>
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline block">INITIATIVE</span>
<span className="font-body-sm text-body-sm font-medium text-primary">Effective Architect</span>
</div>
</div> */}
</div>
{/* Right: Editorial Portrait Frame */}
<div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
<div className="bg-surface-container-low p-space-sm relative">
{/* Framing Metadata Note */}

<div className="relative overflow-hidden aspect-[4/4] bg-surface-dim">
<img alt="Crystal Kizor seated in her architecture studio" className="w-full h-full object-cover transition-all duration-700 ease-out" src="/images/crystalkizor.png"/>
</div>

</div>
{/* Overlapping Decorative Stamp
<div className="hidden sm:flex -bottom-space-md -left-space-md absolute bg-primary text-on-primary px-space-md py-space-sm shadow-md items-center gap-space-sm">
<img alt="Monogram" className="w-6 h-6 invert" src="/images/crystal_kizor_monogram.png"/>
<span className="font-label-sm text-label-sm uppercase tracking-widest">EST. 2018 · COKA</span>
</div> */}
</div>
</div>
</div>
</ScrollReveal>
{/* 08. ABOUT CRYSTAL — BIOGRAPHICAL MONOGRAPH */}

{/* 08. ABOUT CRYSTAL — BIOGRAPHICAL MONOGRAPH */}
<ScrollReveal
  as="section"
  className="w-full bg-surface py-space-md md:py-space-xl px-margin md:px-margin-md lg:px-margin-lg"
  id="about"
  variant="up"
>
  <div className="max-w-7xl mx-auto space-y-space-xl">
    {/* Monograph Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg items-start">
      {/* Left: Index & Meta */}
      <div className="lg:col-span-4 space-y-space-lg">
        <div className="space-y-space-xs">
          <h2 className="font-display-lg text-display-lg text-primary tracking-tight">
            {"About Crystal"}
          </h2>
        </div>

        {/* Education & Professional Affiliations */}
        <div className="hidden lg:block md:hidden bg-surface-container-low p-space-md space-y-space-md">
          <span className="font-label-sm text-label-sm uppercase font-bold text-primary block">
            {"EDUCATION & PROFESSIONAL AFFILIATIONS"}
          </span>

          <ul className="space-y-space-xs font-label-sm text-label-sm text-on-surface-variant">
            <li className="flex flex-col gap-1 bg-surface p-space-sm">
              <span>{"ARCHITECTURE"}</span>
              <span className="text-primary font-medium">
                {"B.Sc. Architecture"}
              </span>
              <span>{"University of Nigeria"}</span>
            </li>

            <li className="flex flex-col gap-1 bg-surface p-space-sm">
              <span>{"POSTGRADUATE EDUCATION"}</span>
              <span className="text-primary font-medium">
                {"Master's degree in Interior Architecture"}
              </span>
              <span>{"Coventry University, England"}</span>
            </li>

            <li className="flex flex-col gap-1 bg-surface p-space-sm">
              <span>{"FURTHER TRAINING"}</span>
              <span className="text-primary font-medium">
                {"Sustainable Real Estate"}
              </span>
              <span>{"University of Cambridge"}</span>
            </li>

            <li className="flex flex-col gap-1 bg-surface p-space-sm">
              <span>{"PROFESSIONAL MEMBERSHIP"}</span>
              <span className="text-primary font-medium">
                {"Graduate Member"}
              </span>
              <span>{"Nigerian Institute of Architects"}</span>
            </li>

            <li className="flex flex-col gap-1 bg-surface p-space-sm">
              <span>{"INDUSTRY MEMBERSHIP"}</span>
              <span className="text-primary font-medium">
                {"Member"}
              </span>
              <span>{"Green Building Council Nigeria"}</span>
            </li>
          </ul>
        </div>

        {/* Verified Professional Links */}
        {/* <div className="space-y-space-xs font-label-md text-label-md uppercase tracking-wider text-outline">
          <a
            className="block text-primary hover:text-secondary transition-colors"
            href="https://ng.linkedin.com/in/crystal-kizor"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"→ LinkedIn Profile"}
          </a>

          <a
            className="block text-primary hover:text-secondary transition-colors"
            href="https://studiocoka.com/studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"→ Studio COKA"}
          </a>

          <a
            className="block text-primary hover:text-secondary transition-colors"
            href="https://studiocoka.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"→ Architecture & Interior Design"}
          </a>
        </div> */}
      </div>

      {/* Right: Biographical Text */}
      <div className="lg:col-span-8 space-y-space-md font-body-lg text-body-lg text-on-surface leading-relaxed">
        {/* <p className="font-headline-sm text-headline-sm font-normal text-primary">
          {"Crystal Kizor is an architect, design entrepreneur, and educator whose work explores how architecture can respond to climate, context, and the people who inhabit a space."}
        </p> */}

        <p className="text-on-surface-variant text-sm  md:text-base">
          {"With a background in architecture and postgraduate training in interior architecture, Crystal combines design thinking, material awareness, and environmental performance to create spaces that improve everyday life through natural ventilation, daylight, and thoughtful planning."}
        </p>


        <p className="text-on-surface-variant text-sm  md:text-base">
          {"As Design Director of Studio COKA, she leads architecture and interior design, focusing on passive design and material intelligence to reduce energy demand and create context-responsive spaces."}
        </p>

        <p className="text-on-surface-variant text-sm md:text-base">
          {"Beyond practice, Crystal shares ideas on design, professional development, and the built environment, encouraging critical thinking about the spaces we create, opportunities for emerging talent, and the communities we shape."}
        </p>
<div className="lg:hidden bg-surface-container-low p-space-md space-y-space-md">
          <span className="font-label-sm text-label-sm uppercase font-bold text-primary block">
            {"EDUCATION & PROFESSIONAL AFFILIATIONS"}
          </span>

          <ul className="space-y-space-xs font-label-sm text-label-sm text-on-surface-variant">
            <li className="flex flex-col gap-1 bg-surface p-space-sm">
              <span>{"ARCHITECTURE"}</span>
              <span className="text-primary font-medium">
                {"B.Sc. Architecture"}
              </span>
              <span>{"University of Nigeria"}</span>
            </li>

            <li className="flex flex-col gap-1 bg-surface p-space-sm">
              <span>{"POSTGRADUATE EDUCATION"}</span>
              <span className="text-primary font-medium">
                {"Master's degree in Interior Architecture"}
              </span>
              <span>{"Coventry University, England"}</span>
            </li>

            <li className="flex flex-col gap-1 bg-surface p-space-sm">
              <span>{"FURTHER TRAINING"}</span>
              <span className="text-primary font-medium">
                {"Sustainable Real Estate"}
              </span>
              <span>{"University of Cambridge"}</span>
            </li>

            <li className="flex flex-col gap-1 bg-surface p-space-sm">
              <span>{"PROFESSIONAL MEMBERSHIP"}</span>
              <span className="text-primary font-medium">
                {"Graduate Member"}
              </span>
              <span>{"Nigerian Institute of Architects"}</span>
            </li>

            <li className="flex flex-col gap-1 bg-surface p-space-sm">
              <span>{"INDUSTRY MEMBERSHIP"}</span>
              <span className="text-primary font-medium">
                {"Member"}
              </span>
              <span>{"Green Building Council Nigeria"}</span>
            </li>
          </ul>
        </div>
        {/* Career Milestones */}
        <div className="pt-space-md space-y-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block">
            {"CAREER MILESTONES"}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm font-label-sm text-label-sm">
            <div className="bg-surface-container-low p-space-sm">
              <span className="text-secondary font-bold block mb-1">
                {"2019"}
              </span>
              <span className="text-primary font-medium block">
                {"Eye Specialists Hospital"}
              </span>
              <span className="text-on-surface-variant">
                {"The off-grid hospital project in Nsukka was completed."}
              </span>
            </div>

            <div className="bg-surface-container-low p-space-sm">
              <span className="text-secondary font-bold block mb-1">
                {"2019"}
              </span>
              <span className="text-primary font-medium block">
                {"Studio COKA"}
              </span>
              <span className="text-on-surface-variant">
                {"The architecture and interior design studio lists 2019 as its founding year."}
              </span>
            </div>

            <div className="bg-surface-container-low p-space-sm">
              <span className="text-secondary font-bold block mb-1">
                {"DEC 2025"}
              </span>
              <span className="text-primary font-medium block">
                {"AKO Alliance"}
              </span>
              <span className="text-on-surface-variant">
                {"Began serving as founder of the education and opportunity-focused NGO."}
              </span>
            </div>

            <div className="bg-surface-container-low p-space-sm">
              <span className="text-secondary font-bold block mb-1">
                {"MAY 2026"}
              </span>
              <span className="text-primary font-medium block">
                {"Alive & Free"}
              </span>
              <span className="text-on-surface-variant">
                {"Began serving as convener of the youth-focused faith movement."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</ScrollReveal>

{/* DID YOU KNOW — TESH */}
<ScrollReveal as="section" className="w-full bg-primary text-on-primary py-space-xl px-margin md:px-margin-md lg:px-margin-lg" variant="up">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg items-center">
<div className="lg:col-span-5 space-y-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed block">{"Did You Know?"}</span>
<h2 className="font-display-lg text-display-lg text-surface tracking-tight leading-tight">{"Crystal Kizor was the designer behind Nigeria's first fully off-grid hospital."}</h2>
<p className="font-body-md text-body-md text-inverse-on-surface opacity-90 leading-relaxed">{"The Eye Specialist Hospital project is a benchmark for what climate-responsive healthcare infrastructure can make possible."}</p>
</div>
<div className="lg:col-span-7">
<div className="bg-primary-container p-space-sm shadow-md">
<div className="relative aspect-video overflow-hidden bg-surface-dim">
<iframe
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  className="absolute inset-0 h-full w-full"
  frameBorder="0"
  referrerPolicy="strict-origin-when-cross-origin"
  src="https://www.youtube.com/embed/JeH0LdSGHCs?si=znJZr_nVzaT9g9-L&controls=0"
  title="The story behind Nigeria's first off-grid hospital"
/>
</div>
<p className="pt-space-sm font-label-md text-label-md uppercase tracking-wider text-secondary-fixed">{"The story behind Nigeria's first off-grid hospital."}</p>
</div>
</div>
</div>
</ScrollReveal>
{/* ECOSYSTEM OVERVIEW */}
<ScrollReveal as="section" className="w-full bg-surface-container-low py-space-xl px-margin md:px-margin-md lg:px-margin-lg" variant="up">
<div className="max-w-7xl mx-auto space-y-space-lg">
<div className="max-w-3xl space-y-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">{"An Ecosystem Beyond Architecture."}</span>
<h2 className="font-display-lg text-display-lg text-primary tracking-tight">{"Building more than spaces."}</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
            {/* Crystal&apos;s work moves from space to objects, ideas, people, and impact: Studio COKA shapes places; ELEvated brings ideas into everyday objects; The Effective Architect and her writing share knowledge; AKO Alliance and Alive &amp; Free put that knowledge to work in communities. */}
  {"Crystal’s work extends beyond architecture into design, education, research, entrepreneurship and community-building — connected by a belief that thoughtful design can create better ways for people to live, learn and grow."}
</p>

</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm">
{[
  [
    "Spaces",
    "Architecture & Design",
    "Studio COKA",
    "https://studiocoka.com/",
    "Visit Studio COKA",
  ],
  [
    "Ideas",
    "Research, Writing & Education",
    "The Effective Architect",
    "https://crystal-kizor.nestuge.com/",
    "Visit the Marketplace",
  ],
  [
    "Objects",
    "Furniture & Product Design",
    "ELEvated",
    "https://mail.google.com/mail/?view=cm&fs=1&to=crystalkizor@gmail.com",
    "Send a Mail",
  ],
  [
    "People",
    "Speaking & Conversations",
    "Speaking Engagements",
    "https://www.youtube.com/@crystalkizor",
    "Listen to Crystal",
  ],
  [
    "Opportunity",
    "Education & Youth",
    "AKO Alliance",
    "https://akoalliance.com/",
    "Discover AKO",
  ],
  [
    "Purpose",
    "Faith & Youth",
    "Alive and Free",
    null,
    'Coming Soon',
  ],
].map(([label, category, destination, href, cta]) => {
  const content = (
    <>
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary group-hover:text-secondary-fixed block">
        {label}
      </span>

      <span className="mt-space-xs text-xs text-primary group-hover:text-surface block">
        {category}
      </span>

      <span className="mt-space-xs text-sm font-body-sm text-on-surface-variant group-hover:text-surface-variant block">
        {destination}
      </span>

      {href ? (
        <Link style={{marginTop: '30px'}} className="group-hover:text-secondary-fixed flex hover:underline items-center justify-end gap-x-2 font-label-sm text-label-sm uppercase tracking-wider text-secondary  block" href={href }>
          <p>{cta}</p>
          <img src="/svg/arrow-f-brown.svg" alt="arrow-f" className='w-5 h-5'/>
        </Link>
      ):<button style={{marginTop: '30px', display:'none'}} className="flex items-center justify-end gap-x-2 font-label-sm text-label-sm uppercase tracking-wider text-secondary group-hover:text-secondary-fixed block" disabled={!cta}>{cta}</button>}
    </>
  );

  return href ? (
    <div
      className="shadow-lg bg-surface p-space-md "
      // href={href}
      key={label}
    >
      {content}
    </div>
  ) : (
    <div
      className="shadow-lg bg-surface p-space-md"
      key={label}
    >
      {content}
    </div>
  );
})}
</div>
</div>
</ScrollReveal>
{/* 02. PHILOSOPHY & PILLARS SECTION */}
<ScrollReveal as="section" className="w-full bg-surface-container-low py-space-xl px-margin md:px-margin-md lg:px-margin-lg" variant="up">
<div className="max-w-7xl mx-auto space-y-space-xl">
{/* Philosophy Statement */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg items-start">
<div className="lg:col-span-3">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">{"HER DESIGN PHILOSOPHY"}</span>
<span className="font-label-md text-label-md text-outline block mt-space-xs">{"Built for this climate. Designed for people."}</span>
</div>
<div className="lg:col-span-9 space-y-space-md">
<h2 className="font-headline-lg text-headline-lg-mobile text-primary leading-tight font-normal">
            {'“The richness of a place is in its stories, its history, its people. When we lose something as concrete as architecture, what is telling our stories?”'}
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
{"Our work is shaped by the climate, the site, and the people who will use the space, not by what is fashionable."}
          </p>
</div>
</div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter lg:gap-gutter-lg pt-space-md">
      {[
        [
          "air",
          "Climate Responsive",
          "Natural ventilation and solar orientation to minimise energy dependency.",
        ],
        [
          "public",
          "Context Driven",
          "Site-specific resources for reduced carbon footprint and thermal mass.",
        ],
        [
          "diversity_1",
          "End User Focused",
          "Spaces designed to support health, psychology, and social life.",
        ],
      ].map(([icon, title, description]) => (
        <div
          key={title}
          className="bg-surface p-space-lg space-y-space-sm shadow-sm transition-transform hover:-translate-y-1 duration-300"
        >
          {/* <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-lg">{icon}</span>
          </div> */}

          <h3 className="font-headline-sm text-headline-sm text-primary">
            {title}
          </h3>

          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {description}
          </p>
        </div>
      ))}
    </div>
</div>
</ScrollReveal>
{/* 03. SPACES — STUDIO COKA */}
<ScrollReveal as="section" className="w-full bg-surface py-space-xl px-margin md:px-margin-md lg:px-margin-lg" id="spaces" variant="up">
<div className="max-w-7xl mx-auto space-y-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">{"Crystal's architectural practice"}</span>
<h2 className="font-display-lg text-display-lg text-primary tracking-tight">{"Architecture in Practice"}</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">{"“We design with nature, not against it.”"}</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg">
<div className="lg:col-span-8 space-y-space-md">
<p className="font-headline-sm text-headline-sm text-primary leading-relaxed">{"Crystal's work responds to climate, context, materials, and the people who use a space. It considers how a building performs, how it feels to inhabit, and how it belongs to the community around it."}</p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{"“The richness of a place is in its stories, its history, its people.” That attention informs an approach to architecture that is specific to place rather than copied and pasted."}</p>
</div>
<aside className="lg:col-span-4 bg-surface-container-low p-space-lg space-y-space-sm">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">{"A point of view"}</span>
<p className="font-headline-sm text-headline-sm text-primary">{"“I'd love to see thoughtful architecture, not copy and paste.”"}</p>
</aside>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg items-start">
<div className="lg:col-span-4 space-y-space-sm">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">{"Geographic reach"}</span>
<h3 className="font-headline-md text-headline-md text-primary">{"Places of practice"}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"Current and documented work across Nigeria and Senegal."}</p>
</div>
<div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
{["Enugu, Nigeria", "Nsukka, Nigeria", "Yola, Nigeria", "Rural Casamance, Senegal"].map((location) => (
<div className="border-t border-outline/30 pt-space-sm" key={location}>
<span className="font-label-md text-label-md text-primary uppercase tracking-wider">{location}</span>
</div>
))}
</div>
</div>
<div className="space-y-space-md">
<div className="flex flex-wrap items-end justify-between gap-space-sm">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">{"Work Gallery"}</span>
<h3 className="font-headline-md text-headline-md text-primary mt-space-xs">{"A collection of architectural works & studies"}</h3>
</div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">{"Selected views"}</span>
</div>
<div className="grid grid-cols-2 lg:grid-cols-12 gap-space-sm">
{[
  ["col-span-2 lg:col-span-7 aspect-[16/10]", "center", "/images/project-nature1.jpeg", "Residential architecture with deep shade and planted landscape"],
  ["col-span-1 lg:col-span-5 aspect-[4/5]", "left", "/images/project_nature2.jpeg", "Warm timber interior with a garden view"],
  ["col-span-1 lg:col-span-4 aspect-square", "right", "/images/project3.jpeg", "Studio COKA interior with timber detailing"],
  ["col-span-2 lg:col-span-8 aspect-[16/9]", "center bottom", "/images/project_community.png", "Community architecture with a shaded gathering space"],
].map(([layout, position, src, alt], index) => (
<figure className={`${layout} overflow-hidden bg-surface-container group`} key={index}>
<img alt={alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={src} style={{ objectPosition: position }} />
</figure>
))}
</div>
</div>
<div className="border-t border-outline/30 pt-space-md flex flex-col md:flex-row md:items-center md:justify-between gap-space-sm">
<p className="font-headline-sm text-headline-sm text-primary max-w-2xl">{"Every project is shaped by context, and guided by performance, identity, and craft."}</p>
<Link href="https://studiocoka.com/" className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-primary transition-colors" rel="noreferrer" target="_blank">
<span>{"Learn More"}</span>
<img src="/svg/arrow-f-brown.svg" alt="arrow-f" className='w-5 h-5' />
</Link>
</div>
</div>
</ScrollReveal>
{/* 07. SPEAKING — "IDEAS WORTH BUILDING" */}
<ScrollReveal
  as="section"
  className="w-full bg-primary text-on-primary py-space-xl px-margin md:px-margin-md lg:px-margin-lg relative overflow-hidden"
  id="speaking"
  variant="up"
>
  <div className="max-w-7xl mx-auto space-y-space-xl">
    {/* Featured TEDx Appearance */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg items-center">
      <div className="lg:col-span-7 relative">
        <div className="aspect-[16/9] overflow-hidden bg-surface-container-high relative">
          <img
            alt="Crystal Kizor, architect and interior designer, sharing ideas about the future of the built environment."
            className="w-full h-full object-cover"
            src="/images/crystal_speaker.png"
          />
          <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
        </div>

        <div className="pt-space-xs flex justify-between gap-space-sm font-label-sm text-label-sm text-surface-variant opacity-80">
          <span>{"TEDxPortHarcourt"}</span>
          <span>{"2025 · The Next Now"}</span>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-space-md">
        <span className="font-label-sm text-label-lg font-bold uppercase tracking-widest text-gray-400 block">{"IDEAS & CONVERSATIONS"}</span>

        <h2 className="font-display-lg text-4xl text-surface tracking-tight leading-tight">{"What Will Our Built Environment Look Like in the Next 65 Years?"}</h2>

        <p className="font-body-md text-body-md text-inverse-on-surface opacity-90 leading-relaxed">{"At TEDxPortHarcourt, Crystal Kizor challenged us to think about how\n          we design, build, and take responsibility for the places we call\n          home. It is a conversation not just for architects, but for clients,\n          developers, policymakers, and citizens."}</p>

        <blockquote className="border-l-2 border-secondary pl-space-md font-headline-sm text-headline-sm text-surface leading-relaxed">{"“Every building does one of two things: It preserves memory or erases it.”"}</blockquote>


        {/* <div className="flex flex-wrap gap-space-sm pt-space-xs">
          <Link
            className="bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container px-space-lg py-space-sm font-label-md text-label-md uppercase tracking-wider inline-flex items-center gap-space-xs transition-colors"
            href="https://www.linkedin.com/posts/crystal-kizor_what-will-our-built-environment-look-like-activity-7421847702092546048-78e4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{"Book Crystal Today"}</span>
            <img src="/svg/calendar.svg" alt="calendar" className="w-4 h-4"/>
          </Link>

          <a
            className="border border-outline px-space-lg py-space-sm font-label-md text-label-md uppercase tracking-wider inline-flex items-center gap-space-xs hover:bg-primary-container transition-colors"
            href="https://tedxportharcourt.com/speakers/a01411ad-22eb-4e92-9f94-6867a1f1446b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{"TEDx Speaker Profile"}</span>
            <span className="material-symbols-outlined text-base">{"open_in_new"}</span>
          </a>
        </div> */}
      </div>
    </div>

    {/* Ideas & Areas of Conversation */}
    <div className="pt-space-md space-y-space-md">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block">{"IDEAS THAT SHAPE OUR BUILT ENVIRONMENT"}</span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Climate and Comfort */}
        <div className="bg-primary-container p-space-md space-y-space-xs">
          <span className="font-label-sm text-label-sm text-secondary-fixed">{"01 / CLIMATE & COMFORT"}</span>

          <h3 className="font-headline-sm text-headline-sm text-surface">{"Buildings That Work With Their Climate"}</h3>

          <p className="font-body-sm text-body-sm text-on-primary-container">{"Homes are getting hotter, energy bills are rising, and the way we\n            design our buildings deserves a closer look. Crystal explores how\n            natural ventilation, solar orientation, shading, and thoughtful\n            design can improve comfort while reducing dependence on mechanical\n            cooling."}</p>
        </div>

        {/* Identity and Culture */}
        <div className="bg-primary-container p-space-md space-y-space-xs">
          <span className="font-label-sm text-label-sm text-secondary-fixed">{"02 / IDENTITY & CULTURE"}</span>

          <h3 className="font-headline-sm text-headline-sm text-surface">{"Architecture That Tells Our Stories"}</h3>

          <p className="font-body-sm text-body-sm text-on-primary-container">{"When the built environment reflects who we are and where we are,\n            it stops feeling imposed and starts feeling like home. Crystal\n            explores how architecture, local materials, cultural identity,\n            and the memory of a place can inform contemporary design."}</p>
        </div>

        {/* People and Wellbeing */}
        <div className="bg-primary-container p-space-md space-y-space-xs">
          <span className="font-label-sm text-label-sm text-secondary-fixed">{"03 / PEOPLE & WELLBEING"}</span>

          <h3 className="font-headline-sm text-headline-sm text-surface">{"Designed for the People Who Use the Space"}</h3>

          <p className="font-body-sm text-body-sm text-on-primary-container">{"Architecture is not only about what a building looks like. It is\n            also about how people live, work, and feel inside it. From natural\n            light and airflow to layout and material choices, Crystal\n            considers how thoughtful design can support comfort and everyday\n            wellbeing."}</p>
        </div>

        {/* Future of African Cities */}
        <div className="bg-primary-container p-space-md space-y-space-xs">
          <span className="font-label-sm text-label-sm text-secondary-fixed">{"04 / AFRICAN CITIES & FUTURE GENERATIONS"}</span>

          <h3 className="font-headline-sm text-headline-sm text-surface">{"Building a Future Worth Inheriting"}</h3>

          <p className="font-body-sm text-body-sm text-on-primary-container">{"Nigeria is rich in stories, materials, and architectural\n            traditions. How can we bring these together with contemporary\n            thinking to create places that respond to their context rather\n            than simply copy what exists elsewhere? Crystal invites us to\n            think intentionally about the cities and communities we are\n            shaping for the next generation."}</p>
        </div>
      </div>
    </div>

    {/* Closing Thought and Speaking Enquiries */}
    <div className="border-t border-outline-variant pt-space-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg items-center">
      <div className="lg:col-span-8 space-y-space-sm">
        {/* <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">{"A QUESTION WORTH ASKING"}</span>

        <h3 className="font-headline-sm text-headline-sm md:text-2xl text-surface leading-relaxed">{"What do we want the places we live and work in to stand for 20–50\n          years from now?"}</h3> */}

        <p className="font-body-sm text-body-sm text-inverse-on-surface opacity-80">{"For Crystal, these conversations are an invitation to think beyond\n          individual buildings and consider the people, places, and futures\n          our design decisions shape."}</p>
      </div>

      <div className="lg:col-span-4 lg:flex lg:justify-end">
        <Link
          className="bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container px-space-lg py-space-sm font-label-md text-label-md uppercase tracking-wider inline-flex items-center gap-space-xs transition-colors"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=crystalkizor@gmail.com"
        >
          <span>{"Book Crystal to Speak"}</span>
          <img src="/svg/calendar.svg" className='w-5 h-5' alt="" />
        </Link>
      </div>
    </div>
  </div>
</ScrollReveal>
{/* </section> */}
{/* 06. IMPACT — AKO ALLIANCE & ALIVE AND FREE */}
<ScrollReveal
  as="section"
  className="w-full bg-surface-container-high py-space-xl px-margin md:px-margin-md lg:px-margin-lg"
  id="impact"
  variant="up"
>
  <div className="max-w-7xl mx-auto space-y-space-xl">
    {/* Section Header */}
    <div className="space-y-space-xs max-w-3xl">
      <h2 className="font-display-lg text-display-lg text-primary tracking-tight">
        {"Social Impact & Human Purpose"}
      </h2>

      <p className="font-body-lg text-body-lg text-on-surface-variant">
        {"Crystal's work extends beyond the built environment. Through programs, she is involved in initiatives focused on educational opportunity, community progress, spiritual growth, and helping young people discover purpose."}
      </p>
    </div>

    {/* Two Impact Pillars */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter lg:gap-gutter-lg">
      {/* Pillar A: AKO ALLIANCE */}
      <div className="bg-surface p-space-lg flex flex-col justify-between space-y-space-lg shadow-sm">
        <div className="space-y-space-md">
          <div className="flex items-center justify-between gap-space-sm">
            <span className="font-label-md text-label-md font-bold uppercase tracking-widest text-secondary">
              {"01 / EDUCATION & OPPORTUNITY"}
            </span>

            <span className="font-label-sm text-label-sm text-outline">
              {"FOUNDER · DEC 2025"}
            </span>
          </div>

          <div className="space-y-space-xs">
            <h3 className="font-headline-lg text-headline-lg text-primary">
              {"AKO Alliance"}
            </h3>

            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              {"Education · Opportunity · Community"}
            </p>
          </div>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {"AKO Alliance is an NGO founded by Crystal to expand opportunities for children, families, and young adults. Its stated mission includes helping children access education, supporting families with capital for business, and sponsoring innovative ideas that can drive progress."}
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {"The initiative is built around the belief that access to opportunity gives people a platform from which they can learn, grow, and improve their circumstances."}
          </p>

          {/* Mission Statement */}
          <div className="bg-surface-container-low p-space-md space-y-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">
              {"THE GUIDING BELIEF"}
            </span>

            <blockquote className="font-headline-sm text-headline-sm text-primary leading-relaxed">
              {"Opportunity is at the bedrock of our drive."}
            </blockquote>

            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {"— AKO Alliance"}
            </span>
          </div>
        </div>

        <div className="pt-space-sm">
          <Link
            href="https://akoalliance.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end gap-space-xs font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary transition-colors"
          >
            <span>{"Discover More About AKO Alliance"}</span>
            <img src="/svg/arrow-f.svg" alt="arrow" className='w-5 h-5'/>
          </Link>
        </div>
      </div>

      {/* Pillar B: ALIVE & FREE */}
      <div className="bg-surface p-space-lg flex flex-col justify-between space-y-space-lg shadow-sm">
        <div className="space-y-space-md">
          <div className="flex items-center justify-between gap-space-sm">
            <span className="font-label-md text-label-md font-bold uppercase tracking-widest text-secondary">
              {"02 / FAITH & PERSONAL GROWTH"}
            </span>

            <span className="font-label-sm text-label-sm text-outline">
              {"CONVENER · MAY 2026"}
            </span>
          </div>

          <div className="space-y-space-xs">
            <h3 className="font-headline-lg text-headline-lg text-primary">
              {"Alive & Free"}
            </h3>

            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              {"Truth · Healing · Freedom · Identity · Purpose"}
            </p>
          </div>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {"Alive & Free is a movement focused on helping young people walk into truth, healing, freedom, identity, purpose, and life in Christ. Through honest conversations, gatherings, and worship, it seeks to create opportunities for spiritual growth, restoration, and meaningful connection."}
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {"Its message speaks to young people navigating questions of identity, pressure, anxiety, emptiness, and the search for meaning. The focus is on creating room to explore faith, discover purpose, and build a more grounded sense of self."}
          </p>
        </div>

        {/* Core Focus */}
        <div className="pt-space-sm">
          <div className="bg-surface-container-low p-space-md space-y-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">
              {"THE HEART OF THE MOVEMENT"}
            </span>

            <p className="font-headline-sm text-headline-sm text-primary leading-relaxed">
              {"Truth, healing, freedom, identity, purpose, and life in Christ."}
            </p>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {"A movement creating space for honest conversations, faith, spiritual growth, and connection among young people."}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</ScrollReveal>


{/* 09. INTERACTIVE PATHWAY SELECTOR — "WHAT BRINGS YOU HERE?" */}
<ScrollReveal as="section" className="w-full flex flex-col items-center py-space-xl" id="connect" variant="up">
<div className="w-full lg:w-[700px] max-w-7xl mx-auto space-y-space-xl">
{/* Section Header */}
{/* Quick Tectonic Inquiry Module */}
<div className="w-full bg-surface p-space-md md:p-space-lg mx-auto shadow-sm space-y-space-md" id="inquiry">
<div className="space-y-1">
<h4 className="text-center font-headline-sm text-headline-sm text-primary">{"Send a Message"}</h4>
</div>
<InquiryForm />
</div>
</div>
</ScrollReveal>
</div>
</main>


<footer className="w-full bg-surface-container-low pt-space-xl pb-space-lg">
  <div className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter lg:gap-gutter-lg pb-space-xl">
      {/* Personal Brand */}
      <div className="md:col-span-5 space-y-space-md">
        <h3 className="font-display-lg text-display-lg text-primary leading-none">
          {"Crystal Kizor"}
        </h3>

        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          {"Crystal brings together architecture, climate-responsive design, and local materials to create spaces that work for people and their environment."}
        </p>

        {/* Social Media */}
        <div className="flex items-center gap-space-md pt-space-xs">
          <Link
            href="https://www.instagram.com/crystalkizor/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Crystal Kizor on Instagram"
            className="hover:opacity-70 transition-opacity"
          >
            <img
              src="/svg/socials/insta.svg"
              alt=""
              className="w-7 h-7"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/crystal-kizor/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Crystal Kizor on LinkedIn"
            className="hover:opacity-70 transition-opacity"
          >
            <img
              src="/svg/socials/linkedin.svg"
              alt=""
              className="w-7 h-7"
            />
          </Link>

          <Link
            href="https://www.youtube.com/@crystalkizor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Crystal Kizor on YouTube"
            className="hover:opacity-70 transition-opacity"
          >
            <img
              src="/svg/socials/youtube.svg"
              alt=""
              className="w-8 h-14"
            />
          </Link>
        </div>
        <div className="space-y-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest block">
            {"Contact"}
          </span>

          <Link
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors block break-words"
            href="mailto:crystalkizor@gmail.com"
          >
            {"crystalkizor@gmail.com"}
          </Link>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-space-lg">
        {/* Work */}
        <div className="space-y-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest block">
            {"Work"}
          </span>

          <Link
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors block"
            href="https://studiocoka.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Studio COKA"}
          </Link>

          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {"ELEvated"}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {"The Effective Architect (TEA)"}
          </p>
        </div>

        {/* Ideas — Informational Only */}
        {/* <div className="space-y-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest block">
            {"Ideas"}
          </span>

          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            {""}
          </p>

          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {"The Effective Architect (TEA)"}
          </p>
        </div> */}

        {/* Impact */}
        <div className="space-y-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest block">
            {"Impact"}
          </span>

          <Link
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors block"
            href="https://akoalliance.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"AKO Alliance"}
          </Link>

          <Link
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors block"
            href="#impact"
          >
            {"Alive & Free"}
          </Link>
        </div>

        {/* Engage */}
        <div className="space-y-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest block">
            {"Engage"}
          </span>

          <Link
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors block"
            href="#speaking"
          >
            {"Speaking"}
          </Link>
        </div>

        {/* Contact */}
        
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-outline-variant pt-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
      <div className="flex flex-wrap items-center gap-space-md">
        <span>{"© 2026 CRYSTAL KIZOR"}</span>
        <span>{"ALL RIGHTS RESERVED"}</span>
      </div>

      <span>{"LAGOS · ENUGU"}</span>
    </div>
  </div>
</footer>


    </>
  );
}
