import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { ArrowRight, Bot, CalendarCheck, Globe2, Layers3, MessageSquareText, Search, Sparkles, Workflow, Zap } from "lucide-react";
import "./styles.css";

const TALLY = "https://tally.so/r/A7A96e";
const INVESTMENT = "https://nexora-investment-guide.pages.dev";

const cases = [
  { title: "Maison Noir", type: "Fine Dining Restaurant", link: "https://maison-noir-case-study.netlify.app/", tag: "Restaurant", text: "A dark cinematic restaurant concept built around perception, reservations, menu discovery, and premium dining intent." },
  { title: "Maison Vale", type: "Boutique Hotel", link: "https://maison-vale-case-study.pages.dev/", tag: "Hotel", text: "A soft countryside hotel experience focused on room discovery, guest trust, stay requests, and hospitality storytelling." },
  { title: "Aurea Wellness", type: "Wellness Studio", link: "https://aurea-wellness-case-study.pages.dev/", tag: "Wellness", text: "A calm service-booking system designed around treatments, trust, appointment requests, memberships, and aftercare follow-up." }
];

const services = [
  { icon: Globe2, title: "Premium Websites", text: "Brand-aligned digital experiences that make premium businesses feel credible before the first inquiry." },
  { icon: CalendarCheck, title: "Booking Flows", text: "Reservation, appointment, and inquiry flows designed to move visitors from interest to action." },
  { icon: Workflow, title: "Lead Recovery", text: "Systems that capture inquiries, reduce missed opportunities, and support follow-up after customer interest." },
  { icon: Bot, title: "Customer Agents", text: "FAQ and customer-service agents that answer common questions, route leads, and reduce repetitive staff work." },
  { icon: Search, title: "Visibility Foundation", text: "Search-ready website structure, local discoverability setup, and review-flow foundations." },
  { icon: Layers3, title: "Brand Build", text: "Positioning, visual direction, messaging, and premium perception systems before automation or outreach." }
];

const process = [
  "Diagnose the business and customer-flow gap",
  "Map the digital journey from attention to inquiry",
  "Design the premium interface and core experience",
  "Connect booking, lead capture, routing, and follow-up",
  "Launch, test, hand over, and prepare for growth"
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22 },
    transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }
  };
}

function Button({ children, href, variant = "primary" }) {
  return <a className={`btn ${variant === "secondary" ? "btn-secondary" : "btn-primary"}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{children}<ArrowRight size={17} /></a>;
}

function Navbar() {
  return <header className="nav-shell"><nav className="nav container"><a href="#top" className="brand"><img src="/assets/nexora-logo.png" alt="Nexora Systems" onError={(e)=>{e.currentTarget.style.display='none'}}/><span className="brand-fallback">Nexora Systems<small>Digital Systems</small></span></a><div className="nav-links"><a href="#systems">Systems</a><a href="#cases">Case Studies</a><a href="#process">Process</a><a href={INVESTMENT} target="_blank" rel="noreferrer">Investment</a></div><Button href={TALLY} variant="secondary">Start a Project</Button></nav></header>;
}

function FlowCard({ title, subtitle, className }) {
  return <motion.div className={`flow-card ${className}`} animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}><span>{title}</span><strong>{subtitle}</strong><div className="mini-lines"><i></i><i></i><i></i></div></motion.div>;
}

function Hero() {
  return <section className="hero section" id="top"><div className="container hero-grid"><motion.div className="hero-copy" {...fadeUp()}><div className="eyebrow"><Sparkles size={14}/> Digital Customer-Flow Systems</div><h1>Premium digital systems for brands where perception matters.</h1><p className="lead">Nexora builds websites, booking flows, lead capture, automation, and customer-service systems for hospitality, wellness, and lifestyle brands.</p><div className="hero-actions"><Button href={TALLY}>Start a Project</Button><Button href="#cases" variant="secondary">View Case Studies</Button></div></motion.div><motion.div className="command-center" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.9}}><div className="orbit-ring ring-one"></div><div className="orbit-ring ring-two"></div><motion.div className="core-orb" animate={{boxShadow:["0 0 50px rgba(198,169,114,.18)","0 0 90px rgba(198,169,114,.34)","0 0 50px rgba(198,169,114,.18)"]}} transition={{duration:4,repeat:Infinity}}><span>Nexora</span><strong>OS</strong></motion.div><FlowCard title="Website" subtitle="Premium interface" className="card-site"/><FlowCard title="Booking" subtitle="Inquiry captured" className="card-booking"/><FlowCard title="Automation" subtitle="Follow-up active" className="card-auto"/><FlowCard title="CRM" subtitle="Warm lead routed" className="card-crm"/></motion.div></div></section>;
}

function Problem() {
  return <section className="section"><div className="container split"><motion.div {...fadeUp()}><div className="eyebrow"><Zap size={14}/> The Gap</div><h2>Most premium brands lose customers before the first conversation.</h2></motion.div><motion.div className="panel" {...fadeUp(.12)}><p>A weak website, scattered Instagram links, unclear booking paths, and missed follow-ups quietly damage trust. Nexora fixes the customer journey from first impression to inquiry, booking, and repeat engagement.</p><div className="diagnosis-grid"><span>Weak digital perception</span><span>Lost inquiries</span><span>No lead capture</span><span>No follow-up system</span></div></motion.div></div></section>;
}

function Systems() {
  return <section className="section" id="systems"><div className="container"><motion.div className="section-head" {...fadeUp()}><div><div className="eyebrow"><Layers3 size={14}/> What Nexora Builds</div><h2>Not random web design. Business systems with a front-end.</h2></div><p>Each service is designed to improve trust, capture intent, route inquiries, and support better customer follow-up.</p></motion.div><div className="services-grid">{services.map((s,i)=>{const Icon=s.icon; return <motion.article className="service-card" key={s.title} {...fadeUp(i*.05)}><Icon size={24}/><h3>{s.title}</h3><p>{s.text}</p></motion.article>})}</div></div></section>;
}

function CaseStudies() {
  return <section className="section cases-section" id="cases"><div className="container"><motion.div className="section-head" {...fadeUp()}><div><div className="eyebrow"><MessageSquareText size={14}/> Experience Lab</div><h2>Three live concepts that show the Nexora approach.</h2></div><p>Each case study demonstrates how customer-flow thinking changes the digital experience for a specific industry.</p></motion.div><div className="case-grid">{cases.map((c,i)=><motion.article className="case-card" key={c.title} {...fadeUp(i*.08)} whileHover={{y:-8}}><div className={`case-visual case-${i+1}`}><div className="browser-frame"><span></span><span></span><span></span><div className="preview-scroll"></div></div><b>{c.tag}</b></div><div className="case-copy"><span className="case-status"><i></i>Live Concept</span><h3>{c.title}</h3><strong>{c.type}</strong><p>{c.text}</p><Button href={c.link} variant={i===0?'primary':'secondary'}>View Case Study</Button></div></motion.article>)}</div></div></section>;
}

function Process() {
  return <section className="section" id="process"><div className="container split"><motion.div {...fadeUp()}><div className="eyebrow"><Workflow size={14}/> Process</div><h2>From business diagnosis to a launched customer-flow system.</h2><p className="lead process-lead">This is how Nexora avoids building pretty but empty websites.</p></motion.div><div className="timeline">{process.map((p,i)=><motion.div className="timeline-item" key={p} {...fadeUp(i*.08)}><span>{String(i+1).padStart(2,'0')}</span><p>{p}</p></motion.div>)}</div></div></section>;
}

function InvestmentCTA() {
  return <section className="section"><div className="container"><motion.div className="investment-panel" {...fadeUp()}><div className="eyebrow"><Sparkles size={14}/> Investment Guide</div><h2>Pricing depends on the system, not the page count.</h2><p className="lead">View the Nexora investment guide for premium website, booking flow, brand build, lead recovery, customer-service agent, and full customer-flow system ranges.</p><div className="hero-actions center-actions"><Button href={INVESTMENT}>View Investment Guide</Button><Button href={TALLY} variant="secondary">Start a Project</Button></div></motion.div></div></section>;
}

function Footer() {
  return <footer><div className="container footer-grid"><div><a href="#top" className="footer-brand">Nexora Systems</a><p>Premium digital customer-flow systems for brands where perception, booking, and follow-up matter.</p></div><div><strong>Links</strong><a href="#systems">Systems</a><a href="#cases">Case Studies</a><a href={INVESTMENT} target="_blank" rel="noreferrer">Investment Guide</a></div><div><strong>Contact</strong><a href={TALLY} target="_blank" rel="noreferrer">Start a Project</a><a href="mailto:nexorasystems0126@gmail.com">nexorasystems0126@gmail.com</a></div></div><div className="container copyright">© 2026 Nexora Systems. Built as a premium customer-flow system.</div></footer>;
}

function App() {
  return <><Navbar/><main><Hero/><Problem/><Systems/><CaseStudies/><Process/><InvestmentCTA/></main><Footer/></>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
