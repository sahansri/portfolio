import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Brain, Layout, GraduationCap, ExternalLink, Zap, Sparkles, Menu, X, ArrowRight, Download, Heart } from 'lucide-react';
import profile from './assets/sahan_.jpeg';
import { useState } from 'react';

// Advanced Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Morphing shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -180, -360],
          x: [0, -120, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
    </div>
  );
};

// Enhanced Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 80 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            background: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
          }}
          animate={{
            y: [0, -Math.random() * 200 - 100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Sleek Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.95)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{ 
        backgroundColor,
        borderBottom: `1px solid rgba(255, 255, 255, ${borderOpacity})`
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Sahan Srimal
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="relative px-5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-b border-white/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto px-6 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const App = () => {
  const projects = [
    {
      title: "DriveLine - Bus Management System",
      description: "DriveLine is a web-based fleet operations system used by both drivers and admins. No mobile app-everything runs on the web dashboard, optimized for both desktop and mobile browsers.The platform connects drivers, buses, and admin teams in one unified environment.",
      image: "src/assets/Driveline.png",
      tech: ["React", "Spring Boot", "MongoDB", "WebSocket", "Chart.js"],
      link: "https://bitbucket.org/sahansri/ase_project_team_01/src/main/",
      demo: "https://driveline-seven.vercel.app/",
      status: "Completed",
      featured: true
    },
    {
      title: "WelfareNet - Community Welfare Management System",
      description: "WelfareNet is a comprehensive web application designed to streamline the management of community welfare programs. It enables efficient tracking of beneficiaries, resource allocation, and program outcomes, facilitating better decision-making for welfare organizations.",
      image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Flutter","Spring Boot", "AWS S3", "SQL"],
      link: "https://github.com/sahansri",
      demo: "https://algo-visualizer-demo.com",
      status: "In Progress",
      featured: true
    },
    {
      title: "RIUSS 2025 International Conference Website - University of Ruhuna",
      description: "Designing and developing the complete website for RIUSS 2025 Conference.In this website provides the informations about the conference including instructions and about the conference.",
      image: "src/assets/RIUSS.png",
      tech: ["React js", "Tailwind CSS", "JavaScript"],
      link: "https://github.com/sahansri/Riuss-2025",
      demo: " https://www.sci.ruh.ac.lk/conference/RIUSS2025",
      status: "Completed",
      featured: false
    },
    
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", level: 90 },
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 92 },
        { name: "C", level: 85 },
        { name: "SQL", level: 87 },
        { name: "PHP", level: 80 }
      ],
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      category: "Web Technologies",
      items: [
        { name: "React", level: 95 },
        { name: "Spring Boot", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "HTML/CSS", level: 98 },
        { name: "REST APIs", level: 90 }
      ],
      icon: <Layout className="w-8 h-8 text-purple-400" />,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 50 },
        { name: "AWS", level: 50 },
        { name: "MySQL", level: 88 },
        { name: "Vercel", level: 80 }
      ],
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      gradient: "from-pink-500/20 to-orange-500/20"
    }
  ];

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-white relative overflow-hidden">
      <Navigation />
      <AnimatedBackground />
      <FloatingParticles />
      
      {/* Hero Section - Redesigned */}
      <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </motion.div>
                <span className="text-sm font-medium text-emerald-400 tracking-wide">
                  Available for opportunities
                </span>
              </motion.div>
              
              {/* Name */}
              <motion.h1 
                className="text-7xl md:text-8xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block text-white">Sahan</span>
                <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Srimal
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-xl text-slate-300 leading-relaxed">
                  <span className="text-white font-semibold">Computer Science Undergraduate</span> at{' '}
                  <span className="text-cyan-400 font-medium">University of Ruhuna</span>
                </p>
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                  Crafting elegant solutions through code. Specializing in web development, 
                  software engineering, and emerging technologies.
                </p>
              </motion.div>
              
              {/* Stats */}
              <motion.div 
                className="flex flex-wrap gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Graduating</div>
                    <div className="text-base font-semibold text-white">2026</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-500/20 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Projects</div>
                    <div className="text-base font-semibold text-white">6+</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Technologies</div>
                    <div className="text-base font-semibold text-white">10+</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a 
                  href="https://github.com/sahansri" 
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 flex items-center justify-center transition-colors group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/sahansri" 
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center transition-colors group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </motion.a>
                
                <motion.a 
                  href="mailto:sahan.srimal400@gmail.com" 
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 flex items-center justify-center transition-colors group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-violet-400 transition-colors" />
                </motion.a>
                
                <div className="h-6 w-px bg-white/10 mx-2" />
                
                {/* CTA Buttons */}
                <motion.button
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-xl font-medium text-sm transition-all shadow-lg shadow-emerald-500/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Resume
                  </span>
                </motion.button>

                <motion.a
                  href="#projects"
                  className="px-6 py-2.5 border border-white/10 hover:border-white/20 rounded-xl font-medium text-sm transition-all hover:bg-white/5"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    View Work
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-violet-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Profile image container */}
                <motion.div
                  className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Border gradient */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-violet-500 p-[2px]">
                    <div className="w-full h-full rounded-3xl overflow-hidden bg-slate-950">
                      <motion.img
                        src={profile}
                        alt="Sahan Srimal"
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 px-5 py-3 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-2.5 h-2.5 bg-emerald-400 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <span className="text-sm font-medium text-white">Open to work</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section - Redesigned */}
      <section id="skills" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Technical Expertise
                </span>
              </motion.h2>
              <motion.p
                className="text-slate-400 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                A comprehensive toolkit for building modern, scalable applications
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-white/5 rounded-xl">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                    </div>
                      
                    <div className="space-y-3">
                      {skill.items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-slate-300">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-400">
                              {item.level}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.level}%` }}
                              transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Additional stats section */}
            <motion.div
              variants={fadeInUp}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { number: "6+", label: "Projects Completed", color: "from-blue-400 to-cyan-400" },
                { number: "10+", label: "Technologies", color: "from-purple-400 to-pink-400" },
                { number: "2+", label: "Years Learning", color: "from-green-400 to-teal-400" },
                { number: "∞", label: "Passion Level", color: "from-yellow-400 to-orange-400" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Redesigned */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Featured Work
                </span>
              </motion.h2>
              <motion.p
                className="text-slate-400 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                A selection of projects showcasing my technical skills and creative problem-solving
              </motion.p>
            </motion.div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ y: -8 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                      
                      {/* Status Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full backdrop-blur-sm">
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1.5 text-xs font-semibold rounded-full backdrop-blur-sm ${
                          project.status === 'Completed' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                          project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                          'bg-violet-500/20 text-violet-400 border border-violet-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2.5 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action Links */}
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-sm font-medium transition-all"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        <a
                          href={project.demo}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-xl text-sm font-medium transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Redesigned */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </motion.h2>
              <motion.p 
                className="text-slate-400 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Always open to discussing new opportunities, collaborations, or just chatting about tech
              </motion.p>
            </motion.div>
            
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email",
                  info: "sahan.srimal400@gmail.com",
                  link: "mailto:sahan.srimal400@gmail.com",
                  color: "emerald"
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  title: "LinkedIn",
                  info: "Connect professionally",
                  link: "https://www.linkedin.com/in/sahansri",
                  color: "cyan"
                },
                {
                  icon: <Github className="w-6 h-6" />,
                  title: "GitHub",
                  info: "Check out my work",
                  link: "https://github.com/sahansri",
                  color: "violet"
                }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-${contact.color}-500/10 border border-${contact.color}-500/20 flex items-center justify-center text-${contact.color}-400 mb-4 group-hover:scale-110 transition-transform`}>
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{contact.title}</h3>
                  <p className="text-sm text-slate-400">{contact.info}</p>
                </motion.a>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="mailto:sahan.srimal400@gmail.com"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-xl font-semibold text-center transition-all shadow-lg shadow-emerald-500/20"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Get in Touch
                </span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sahansri"
                className="w-full sm:w-auto px-8 py-3.5 border border-white/20 hover:bg-white/5 rounded-xl font-semibold text-center transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  View LinkedIn
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Redesigned */}
      <footer className="py-12 border-t border-white/5 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent mb-1">
                Sahan Srimal
              </h3>
              <p className="text-sm text-slate-500">
                Computer Science Student • University of Ruhuna
              </p>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm text-slate-400">
                © 2026 All rights reserved • Made with <Heart className="inline w-3.5 h-3.5 text-red-400 fill-current" /> and ☕
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Github className="w-4 h-4" />, href: "https://github.com/sahansri" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/sahansri" },
                { icon: <Mail className="w-4 h-4" />, href: "mailto:sahan.srimal400@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};
 export default App;