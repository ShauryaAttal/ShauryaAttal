import { useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, BookOpen, ChevronDown, Code2, Github,
  Linkedin, Mail, Menu, X,
} from 'lucide-react';
import { experiences, filters, leadership, profile, projects, research, skillGroups } from './data/portfolio';

const IconLink = ({ href, label, children }) => (
  <a className="icon-link" href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" aria-label={label}>{children}</a>
);

function ResumeMenu({ compact = false }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const close = (event) => { if (!ref.current?.contains(event.target)) setOpen(false); };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);
  return <div className={`resume-menu ${compact ? 'compact' : ''}`} ref={ref}>
    <button className="button button-dark" aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen(!open)}>
      Résumés <ChevronDown size={16} aria-hidden="true" />
    </button>
    {open && <div className="resume-popover" role="menu">
      <a role="menuitem" href={profile.resumes.software} target="_blank" rel="noreferrer"><Code2 size={17} /><span><b>Software Engineering</b><small>Products, systems & ML</small></span></a>
      <a role="menuitem" href={profile.resumes.research} target="_blank" rel="noreferrer"><BookOpen size={17} /><span><b>Research</b><small>AI, governance & data</small></span></a>
    </div>}
  </div>;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [['About','about'],['Engineering','engineering'],['Research','research'],['Projects','work'],['Leadership','leadership'],['Contact','contact']];
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="Shaurya Attal, home"><span>SA</span><b>Shaurya Attal</b></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    <nav id="site-nav" className={open ? 'open' : ''} aria-label="Primary navigation">
      {links.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <ResumeMenu compact />
    </nav>
  </header>;
}

function SystemMap() {
  const [active, setActive] = useState('Engineering');
  const nodes = [
    { label:'Engineering', note:'Full-stack products that make complex data usable.' },
    { label:'AI + Data', note:'Models, analytics, and careful evaluation.' },
    { label:'Education', note:'Tools and mentorship designed around learning.' },
    { label:'Governance', note:'Frameworks for accountable, evidence-led AI.' },
  ];
  const current = nodes.find((node) => node.label === active);
  return <div className="system-map" aria-label="Interactive map of Shaurya's work">
    <div className="map-label"><span>FIELD MAP / 01</span><span>SELECT A NODE</span></div>
    <div className="map-canvas">
      <svg viewBox="0 0 520 330" aria-hidden="true"><path d="M260 165L105 82M260 165L412 77M260 165L101 260M260 165L417 258"/><circle cx="260" cy="165" r="42"/></svg>
      <div className="map-center"><span>Build</span><small>with purpose</small></div>
      {nodes.map((node, index) => <button key={node.label} className={`map-node node-${index+1} ${active === node.label ? 'active' : ''}`} onClick={() => setActive(node.label)} aria-pressed={active === node.label}>{node.label}</button>)}
    </div>
    <p className="map-note"><b>{current.label}</b> — {current.note}</p>
  </div>;
}

const SectionIntro = ({ eyebrow, title, text }) => <div className="section-intro"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>;

function ProjectArchive() {
  const [filter, setFilter] = useState('All');
  const visible = projects.filter((project) => filter === 'All' || project.categories.includes(filter));
  return <div className="archive-wrap"><div className="filter-bar" aria-label="Filter projects">{filters.map(item=><button key={item} className={filter===item?'active':''} aria-pressed={filter===item} onClick={()=>setFilter(item)}>{item}</button>)}</div><div className="archive-grid">
    {visible.map(project => <article className="archive-card" key={project.slug}><div><span className="archive-id">{project.id}</span><span className="status-dot">{project.status}</span></div><h3>{project.title}</h3><p>{project.shortDescription}</p><div className="tags">{project.technologies.slice(0,4).map(t=><span key={t}>{t}</span>)}</div>{project.liveUrl && <a className="project-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">See it in action <ArrowUpRight size={15} aria-hidden="true" /></a>}<span className="archive-kind">{project.category}</span></article>)}
  </div></div>;
}

function Timeline({ items, type }) {
  return <div className="timeline">{items.map((item,index)=><article key={`${item.organization}-${item.role}`} className="timeline-item"><div className="timeline-marker"><span>{String(index+1).padStart(2,'0')}</span></div><div className="timeline-main"><div className="timeline-head"><div><p>{item.organization}</p><h3>{item.role}</h3></div><span>{item.dates}</span></div><p>{item.summary}</p><div className="timeline-detail"><span>{type === 'research' ? 'METHOD / CONTRIBUTION' : 'SELECTED CONTRIBUTION'}</span><p>{item.contribution}</p></div><div className="tags">{item.technologies.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div>;
}

function App() {
  useEffect(() => { document.title = 'Shaurya Attal — Software Engineer & AI Researcher'; }, []);
  return <>
    <a className="skip-link" href="#main">Skip to content</a><Navigation />
    <main id="main">
      <section className="hero" id="home"><div className="hero-copy"><p className="eyebrow"><span className="availability-dot"/> GEORGIA TECH · CS</p><h1>I build systems that turn <em>complex signals</em> into useful decisions.</h1><p className="hero-sub">I’m Shaurya Attal, a software engineer and AI researcher working across full-stack products, machine learning, educational technology, and responsible AI.</p><div className="hero-actions"><a className="button button-accent" href="#work">Explore my work <ArrowDownRight size={17}/></a><ResumeMenu/></div><div className="social-row"><IconLink href={profile.socials.github} label="GitHub"><Github size={19}/></IconLink><IconLink href={profile.socials.linkedin} label="LinkedIn"><Linkedin size={19}/></IconLink><IconLink href={`mailto:${profile.email}`} label="Email"><Mail size={19}/></IconLink><span>Johns Creek ↔ Atlanta, Georgia</span></div></div><SystemMap/></section>

      <section className="profile-strip" aria-label="Profile summary"><div><span>EDUCATION</span><strong>Georgia Institute of Technology</strong><small>B.S. Computer Science · Devices + AI</small></div><div><span>BUILDING</span><strong>LearnerSnapshot</strong><small>Founding Software Engineer</small></div><div><span>RESEARCHING</span><strong>AI governance</strong><small>Classification + evidence systems</small></div><div><span>GRADUATION</span><strong>May 2030</strong><small>Atlanta, Georgia</small></div></section>

      <section className="section current-focus about-field-notes" id="about"><p className="eyebrow">WHO AM I? / 01</p><div className="focus-grid"><div className="field-notes-bio"><h2>{profile.bio.headline}</h2>{profile.bio.paragraphs.map((paragraph, paragraphIndex)=><p key={paragraphIndex}>{paragraph.map((segment, segmentIndex)=>segment.bold ? <strong key={segmentIndex}>{segment.text}</strong> : segment.text)}</p>)}</div></div></section>

      <section className="section experience-section" id="engineering"><div className="split-heading"><SectionIntro eyebrow="SOFTWARE ENGINEERING / 02" title="Building products from interface decisions to production systems."/><a href={profile.resumes.software} target="_blank" rel="noreferrer">Software Engineering Résumé <ArrowUpRight size={16}/></a></div><Timeline items={experiences} type="engineering"/></section>

      <section className="section research-section" id="research"><div className="split-heading"><SectionIntro eyebrow="RESEARCH / 03" title="Investigating how intelligent systems behave, influence decisions, and should be governed."/><a href={profile.resumes.research} target="_blank" rel="noreferrer">Research Résumé <ArrowUpRight size={16}/></a></div><Timeline items={research} type="research"/></section>

      <section className="section archive-section" id="work"><SectionIntro eyebrow="PROJECT INDEX / 04" title="Experiments, models, and systems I have built." text="Filter the notebook by problem area to explore deployed products, technical experiments, and research systems."/><ProjectArchive/></section>

      <section className="section impact-section" id="leadership"><SectionIntro eyebrow="LEADERSHIP + IMPACT / 05" title="Technical work becomes meaningful when it travels."/><div className="impact-grid">{leadership.map((item,i)=><article key={item.title}><span>0{i+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>

      <section className="section skills-section"><SectionIntro eyebrow="TOOLS + METHODS / 06" title="A practical toolkit for building and investigating."/><div className="skill-grid">{skillGroups.map((group,i)=><article key={group.title}><span>0{i+1}</span><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></article>)}</div></section>

      <section className="contact-section" id="contact"><div><p className="eyebrow">CONTACT / 07</p><h2>Have a hard problem worth making legible?</h2><p>I’m open to software engineering internships, student research, technical collaborations, and thoughtful conversations about responsible technology.</p></div><div className="contact-actions"><a className="button button-accent" href={`mailto:${profile.email}`}>Start a conversation <Mail size={17}/></a><a href={profile.socials.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16}/></a></div></section>
    </main>
    <footer><a className="brand" href="#home"><span>SA</span><b>Shaurya Attal</b></a><p>Engineer · Researcher · Systems thinker</p><div><a href={profile.resumes.software} target="_blank" rel="noreferrer">Software Engineering Résumé</a><a href={profile.resumes.research} target="_blank" rel="noreferrer">Research Résumé</a><a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div><small>© {new Date().getFullYear()} Shaurya Attal</small></footer>
  </>;
}

export default App;
