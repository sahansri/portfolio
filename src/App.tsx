import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Layout, Sparkles, Rocket } from 'lucide-react';

function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive 3D visualization of neural network architectures",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
      tech: ["Three.js", "React", "TensorFlow.js"],
      link: "#"
    },
    {
      title: "Quantum Computing Dashboard",
      description: "Real-time quantum circuit simulator and visualization platform",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Python", "WebAssembly"],
      link: "#"
    },
    {
      title: "Blockchain Analytics Platform",
      description: "Advanced crypto market analysis with ML predictions",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
      tech: ["Next.js", "Web3.js", "TensorFlow"],
      link: "#"
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
    <div ref={targetRef} className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 selection:text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          style={{
            background: "radial-gradient(circle at center, rgba(37, 99, 235, 0.1) 0%, transparent 80%)",
            width: "100%",
            height: "100%",
            opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0])
          }}
        />
      </div>

      {/* Hero Section */}
      <header className="min-h-screen relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(45deg, rgba(37, 99, 235, 0.1) 0%, rgba(167, 139, 250, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)",
              filter: "blur(100px)",
              transform: "scale(1.5)"
            }}
            animate={{
              scale: [1.5, 1.7, 1.5],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-mono text-blue-400 mb-4 tracking-wider"
            >
              Hello, I'm
            </motion.div>
            <motion.h1 
              className="text-7xl md:text-9xl font-bold mb-8 relative"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 relative z-10">
                Sahan Srimal
              </span>
              <motion.span
                className="absolute -inset-x-6 inset-y-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Building the future through code, one pixel at a time. Specializing in AI, blockchain, and immersive web experiences.
            </motion.p>
            <motion.div 
              className="flex space-x-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="https://github.com/sahansri" className="group relative">
                <div className="absolute inset-0 bg-blue-400 rounded-lg blur transition-all opacity-0 group-hover:opacity-25" />
                <Github className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300 relative" />
              </a>
              <a href="https://www.linkedin.com/in/sahansri" className="group relative">
                <div className="absolute inset-0 bg-purple-400 rounded-lg blur transition-all opacity-0 group-hover:opacity-25" />
                <Linkedin className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300 relative" />
              </a>
              <a href="sahan.srimal400@gmail.com" className="group relative">
                <div className="absolute inset-0 bg-pink-400 rounded-lg blur transition-all opacity-0 group-hover:opacity-25" />
                <Mail className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300 relative" />
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-6 h-6 text-blue-400" />
        </motion.div>
      </header>

      {/* Projects Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold mb-16 text-center"
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.a 
                      href={project.link}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 group/link"
                      whileHover={{ x: 5 }}
                    >
                      View Project 
                      <ExternalLink size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold mb-16 text-center"
            >
              Core Technologies
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/5 hover:border-white/10 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <Code2 className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
                <p className="text-gray-400">Creating immersive user experiences with modern web technologies and frameworks.</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-white/5 hover:border-white/10 transition-all hover:shadow-lg hover:shadow-purple-500/10"
              >
                <Brain className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
                <p className="text-gray-400">Implementing cutting-edge AI solutions and neural networks for complex problems.</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-xl bg-gradient-to-br from-pink-500/5 to-red-500/5 border border-white/5 hover:border-white/10 transition-all hover:shadow-lg hover:shadow-pink-500/10"
              >
                <Layout className="w-12 h-12 text-pink-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">System Architecture</h3>
                <p className="text-gray-400">Designing scalable and efficient systems with modern architectural patterns.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing</h2>
            <p className="text-gray-400 mb-12 text-lg">
              Have a project in mind? I'm always open to discussing new opportunities and innovative ideas.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your.email@example.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full text-lg font-semibold transition-all duration-300 group"
            >
              Get in Touch
              <Rocket className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;