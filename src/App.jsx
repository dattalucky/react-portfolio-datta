import React from 'react';
import { motion } from 'framer-motion';

// Hero Section
const Hero = () => (
  <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-lg mt-4">Full-Stack Developer | AI Enthusiast</p>
    </motion.div>
  </section>
);

// About Section
const About = () => (
  <section className="py-20 bg-gray-800 text-white">
    <motion.div 
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="mt-4 text-lg">I'm a passionate Full-Stack Developer with expertise in AI, cloud computing, and cybersecurity.</p>
    </motion.div>
  </section>
);

// Experience Section
const Experience = () => (
  <section className="py-20 bg-gray-900 text-white">
    <motion.div 
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }}
      className="max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center">Experience</h2>
      <div className="mt-8 space-y-6">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">Software Engineer - AWS & Python</h3>
          <p className="mt-2">Worked on cloud automation, data pipelines, and security best practices.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">Full-Stack Developer</h3>
          <p className="mt-2">Developed scalable web applications using React, Next.js, and Node.js.</p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

// Skills Section
const Skills = () => (
  <section className="py-20 bg-gray-800 text-white text-center">
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-bold">Skills</h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
        <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-700 p-4 rounded-lg">AWS</motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-700 p-4 rounded-lg">Python</motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-700 p-4 rounded-lg">React</motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-700 p-4 rounded-lg">Terraform</motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-700 p-4 rounded-lg">Cybersecurity</motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-700 p-4 rounded-lg">Data Engineering</motion.div>
      </div>
    </motion.div>
  </section>
);

// Projects Section
const Projects = () => (
  <section className="py-20 bg-gray-900 text-white">
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">AI Chatbot</h3>
          <p className="mt-2">Built an AI-powered chatbot using Python & TensorFlow.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">Cloud Automation</h3>
          <p className="mt-2">Developed automated AWS infrastructure using Terraform.</p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

// Contact Section
const Contact = () => (
  <section className="py-20 bg-gray-800 text-white text-center">
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <p className="mt-4 text-lg">Have a project in mind? Let's connect!</p>
      <form className="mt-8">
        <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded bg-gray-700 border-none" />
        <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded bg-gray-700 border-none" />
        <textarea placeholder="Your Message" className="w-full p-3 mb-4 rounded bg-gray-700 border-none" rows="4"></textarea>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  </section>
);

// Main App Component (default export)
const App = () => (
  <div>
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
  </div>
);

export default App;
export { Hero, About, Experience, Skills, Projects, Contact };
