import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useMotionValue } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ArrowRight, Download, Terminal, Database, Layout, Cpu, ChevronRight, MapPin, GraduationCap, Code2, Brain, Sparkles } from 'lucide-react';

// --- Assets Imports ---
import profile from './assets/sahan_.jpeg';
import driveline from './assets/Driveline.png';
import riuss from './assets/RIUSS.png';

// --- Data ---
const PROFILE = {
  name: "Sahan Srimal",
  role: "Computer Science Undergraduate",
  university: "University of Ruhuna",
  location: "Sri Lanka",
  email: "sahan.srimal400@gmail.com",
  social: {
    github: "https://github.com/sahansri",
    linkedin: "https://www.linkedin.com/in/sahansri",
  }
};

const PROJECTS = [
  {
    title: "DriveLine",
    subtitle: "Fleet Management System",
    description: "A comprehensive web-based fleet operations system. Optimized for desktop and mobile browsers with real-time WebSocket tracking.",
    tech: ["React", "Spring Boot", "MongoDB", "WebSocket"],
    link: "https://bitbucket.org/sahansri/ase_project_team_01/src/main/",
    demo: "https://driveline-seven.vercel.app/",
    image: driveline, 
    status: "Completed",
    featured: true
  },
  {
    title: "WelfareNet",
    subtitle: "Community Welfare Platform",
    description: "Streamlining community welfare programs with efficient beneficiary tracking and resource allocation using AI predictions.",
    tech: ["React", "Flutter", "Spring AI", "MySQL"],
    link: "https://github.com/sahansri",
    demo: "#",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000",
    status: "In Progress",
    featured: true
  },
  {
    title: "RIUSS 2025",
    subtitle: "Conference Website",
    description: "Official website for the RIUSS 2025 International Conference for the University of Ruhuna.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://github.com/sahansri/Riuss-2025",
    demo: "https://www.sci.ruh.ac.lk/conference/RIUSS2025",
    image: riuss, 
    status: "Completed",
    featured: false
  }
];

// Tech Stack Data with SimpleIcons Slugs
const TECH_STACK = [
  { name: "Java", slug: "java", color: "#FFFFFF" },
  { name: "Spring Boot", slug: "spring", color: "#6DB33F" },
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Flutter", slug: "flutter", color: "#02569B" }, 
  { name: "MySQL", slug: "mysql", color: "#4479A1" },
  { name: "MongoDB", slug: "mongodb", color: "#47A248" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "AWS", slug: "amazonwebservices", color: "#232F3E" },
  { name: "Git", slug: "git", color: "#F05032" },
  { name: "Tailwind", slug: "tailwindcss", color: "#06B6D4" },
  { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
];

// --- Components ---

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        className="absolute w-8 h-8 border border-emerald-400/50 rounded-full"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-emerald-400 rounded-full"
        style={{ x: cursorX, y: cursorY, translateX: 12, translateY: 12 }}
      />
    </div>
  );
};

const SpotlightBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-slate-950 pointer-events-none">
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000" />
    </div>
  );
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight z-50 group">
          <span className="text-slate-100 group-hover:text-white transition-colors">Sahansri</span>
          <span className="text-emerald-400">.me</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-colors shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)]"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-slate-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute inset-x-0 top-0 bg-slate-950 border-b border-white/10 pt-24 pb-6 px-6 md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-300 hover:text-white py-2 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// --- NEW COMPONENT: About Section ---
const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-emerald-400 mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-medium uppercase tracking-wider">About Me</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            I craft intelligent <br />
            <span className="text-slate-400">software solutions.</span>
          </h2>
          
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              I am a Computer Science undergraduate at the <span className="text-white font-medium">University of Ruhuna</span>, 
              driven by a curiosity for how complex systems work. My journey in tech is defined by a constant pursuit of 
              building scalable, efficient, and user-centric applications.
            </p>
            <p>
              With a strong foundation in <span className="text-white font-medium">Java and Spring Boot</span>, 
              I specialize in backend architecture while maintaining a keen eye for frontend details using React. 
              I am particularly interested in the intersection of Software Engineering and <span className="text-white font-medium">Artificial Intelligence</span>, 
              exploring how predictive models can enhance everyday applications.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
              <Code2 size={16} className="text-emerald-400" /> Full Stack Dev
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
              <Brain size={16} className="text-purple-400" /> AI Enthusiast
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bento Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 sm:col-span-2 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <GraduationCap className="text-blue-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">University of Ruhuna</h3>
            <p className="text-slate-400 text-sm">BSc.(Hons) in Computer Science</p>
            <p className="text-slate-500 text-xs mt-2">Expected Graduation: 2026</p>
          </motion.div>

          {/* Stats Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 transition-all"
          >
            <div className="text-3xl font-bold text-emerald-400 mb-1">6+</div>
            <div className="text-sm text-slate-400">Projects Completed</div>
          </motion.div>

          {/* Stats Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 transition-all"
          >
            <div className="text-3xl font-bold text-cyan-400 mb-1">2+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Tech Slider Component ---
const TechSlider = () => {
  const sliders = [...TECH_STACK, ...TECH_STACK];
  return (
    <div className="relative overflow-hidden w-full py-10">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex gap-16 pr-16"
        >
          {sliders.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="group flex flex-col items-center justify-center gap-3 min-w-[5rem] cursor-pointer">
              <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110">
                <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.slug}/${tech.slug}-original.svg`} onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.slug}/${tech.slug}-original-wordmark.svg`; }} alt={tech.name} className="w-full h-full object-contain absolute inset-0 transition-opacity duration-300 group-hover:opacity-0" />
                <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.slug}/${tech.slug}-original.svg`} onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.slug}/${tech.slug}-original-wordmark.svg`; }} alt={tech.name} className="w-full h-full object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <span className="text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/50 to-cyan-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />
      <div className="relative h-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
          <div className="absolute top-3 right-3 z-20">
            <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-full backdrop-blur-md border ${project.status === 'Completed' ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300' : 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300'}`}>{project.status}</span>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
            <p className="text-sm text-emerald-500/80 font-mono mt-1">{project.subtitle}</p>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
          <div className="space-y-6 mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span key={t} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-slate-300">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 pt-4 border-t border-white/5">
              <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"><Github size={16} /> Code</a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors ml-auto group/link">Live Demo <ExternalLink size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" /></a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen relative selection:bg-emerald-500/30 selection:text-white overflow-hidden">
      <CustomCursor />
      <SpotlightBackground />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 origin-left z-[100]" style={{ scaleX }} />
      <Navigation />

      <main className="relative z-10 flex flex-col gap-24 md:gap-32 pb-20">
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm font-medium mb-6">
                  <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>Available for work
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">Building <span className="text-gradient">digital experiences</span> that matter.</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">Hi, I'm <span className="text-white font-semibold">{PROFILE.name}</span>. A software engineer specialized in full-stack development. Currently crafting solutions at {PROFILE.university}.</motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap gap-4">
                  <a href="#projects" className="px-8 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">View Work <ArrowRight size={18} /></a>
                  <a href="mailto:sahan.srimal400@gmail.com" className="px-8 py-3 border border-white/10 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">Contact Me</a>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-12 flex gap-6 text-slate-500 items-center">
                  <a href={PROFILE.social.github} className="hover:text-emerald-400 transition-colors"><Github size={24} /></a>
                  <a href={PROFILE.social.linkedin} className="hover:text-emerald-400 transition-colors"><Linkedin size={24} /></a>
                  <a href={`mailto:${PROFILE.email}`} className="hover:text-emerald-400 transition-colors"><Mail size={24} /></a>
                  <div className="h-4 w-px bg-white/10 mx-2" />
                  <div className="flex items-center gap-2 text-sm"><MapPin size={16} className="text-emerald-400" />{PROFILE.location}</div>
                </motion.div>
              </div>
              <motion.div className="order-1 lg:order-2 flex justify-center lg:justify-end" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-[2rem] blur-2xl opacity-20 animate-pulse" />
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10" />
                     <img src={profile} alt="Sahan Srimal" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 z-20 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-xl">
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-500/10 rounded-lg"><Terminal size={20} className="text-emerald-400" /></div>
                        <div><div className="text-xs text-slate-400">Experience</div><div className="text-sm font-bold text-white">Full Stack Dev</div></div>
                     </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <section id="skills" className="py-10 relative">
          <div className="container mx-auto px-6 mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Powered By</h2>
            <p className="text-slate-400">The technologies I use to build robust applications</p>
          </div>
          <TechSlider />
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-emerald-400">Projects</span></h2>
              <div className="h-1 w-20 bg-emerald-500 rounded-full" />
            </div>
            <a href="https://github.com/sahansri" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors">View all on GitHub <ChevronRight size={16} /></a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (<ProjectCard key={index} project={project} index={index} />))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-6">
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-emerald-500/50 via-cyan-500/50 to-purple-500/50">
            <div className="bg-slate-950 rounded-[22px] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start a project?</h2>
                  <p className="text-slate-400 max-w-lg">I'm currently looking for internship opportunities and freelance projects. Let's build something amazing together.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <a href="mailto:sahan.srimal400@gmail.com" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl transition-all transform hover:-translate-y-1 text-center shadow-lg shadow-emerald-500/20">Send an Email</a>
                  <a href="#" className="px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl transition-all flex items-center justify-center gap-2"><Download size={18} /> Resume</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/5 relative z-10 bg-slate-950">
        <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Sahan Srimal. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;