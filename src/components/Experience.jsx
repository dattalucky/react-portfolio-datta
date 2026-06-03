import { useState } from "react";
import { EXPERIENCES } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

// 1. Import Icons
import { FaAws, FaPython, FaGithub, FaGitlab, FaDocker, FaReact } from "react-icons/fa";
import { SiTerraform, SiGooglecloud, SiSharp, SiDotnet, SiJira, SiBitbucket } from "react-icons/si";
import { BsDatabaseFill, BsCloudFill, BsCodeSlash } from "react-icons/bs";
import { TbCube3dSphere } from "react-icons/tb";

// 2. Icon Mapping Helper
const getTechIcon = (techName) => {
  const normalized = techName.toLowerCase();
  if (normalized.includes("aws")) return <FaAws className="text-[#FF9900]" />;
  if (normalized.includes("python")) return <FaPython className="text-[#FFD43B]" />;
  if (normalized.includes("gcp") || normalized.includes("google")) return <SiGooglecloud className="text-[#4285F4]" />;
  if (normalized.includes("terraform")) return <SiTerraform className="text-[#844FBA]" />;
  if (normalized.includes("c#")) return <SiSharp className="text-[#239120]" />;
  if (normalized.includes(".net")) return <SiDotnet className="text-[#512BD4]" />;
  if (normalized.includes("sql") || normalized.includes("query")) return <BsDatabaseFill className="text-[#00E559]" />;
  if (normalized.includes("cloud")) return <BsCloudFill className="text-[#007FFF]" />;
  if (normalized.includes("github")) return <FaGithub className="text-white" />;
  if (normalized.includes("gitlab")) return <FaGitlab className="text-[#FC6D26]" />;
  if (normalized.includes("jira")) return <SiJira className="text-[#0052CC]" />;
  if (normalized.includes("bitbucket")) return <SiBitbucket className="text-[#0052CC]" />;
  if (normalized.includes("3d")) return <TbCube3dSphere className="text-purple-400" />;
  if (normalized.includes("react")) return <FaReact className="text-[#61DAFB]" />;
  
  // Fallback icon for anything else
  return <BsCodeSlash className="text-neutral-400" />;
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Animation variants for the stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 } 
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20 px-4 sm:px-6 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-16 text-center text-2xl sm:text-3xl md:text-4xl"
      >
        Experience
      </motion.h2>

      {/* CHANGED: Removed "items-center" and added "w-full" to ensure proper boundary for scrolling */}
      <div className="max-w-5xl mx-auto flex flex-col w-full min-w-0 md:flex-row gap-8 md:gap-16">
        
        {/* Left Side: Navigation Tabs */}
        {/* CHANGED: Replaced "justify-center" with "justify-start w-full scroll-smooth" to prevent clipping on mobile */}
        <div className="w-full md:w-1/3 min-w-0 flex flex-row md:flex-col justify-start gap-3 overflow-x-auto md:overflow-visible no-scrollbar scroll-smooth snap-x snap-mandatory border-b md:border-b-0 md:border-l border-neutral-800">
          {EXPERIENCES.map((experience, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              // CHANGED: Horizontal scroll pills on mobile, full-width buttons on desktop
              className={`relative shrink-0 snap-start md:snap-none md:w-full min-w-max md:min-w-0 px-5 py-3 pb-6 md:py-4 md:pb-4 md:px-6 rounded-3xl text-left whitespace-nowrap md:whitespace-normal transition-all duration-300 ${
                activeTab === index
                  ? "text-white bg-violet-500/15 md:bg-neutral-900/50 border border-violet-400/30 md:border-transparent"
                  : "text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/20"
              }`}
            >
              {activeTab === index && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="hidden md:block absolute bottom-0 md:bottom-auto md:top-0 left-0 w-full md:w-1 h-1 md:h-full bg-violet-400/40 z-0 pointer-events-none"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {/* CHANGED: Made the text slightly smaller on mobile (text-xs) to fit long company names */}
              <span className="relative z-10 text-xs md:text-sm font-semibold tracking-wider uppercase">
                {experience.company}
              </span>
            </button>
          ))}
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full md:w-2/3 min-w-0 min-h-75 md:pl-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col gap-4"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {EXPERIENCES[activeTab].role}
                </h3>
                <p className="text-neutral-400 font-mono text-sm mb-6">
                  {EXPERIENCES[activeTab].year}
                </p>
              </div>

              <p className="text-neutral-300 leading-relaxed tracking-wide text-sm md:text-base">
                {EXPERIENCES[activeTab].description}
              </p>

              {/* UNIQUE TECH BADGES BLOCK */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="mt-8 flex flex-wrap items-center gap-2 md:gap-3"
              >
                {EXPERIENCES[activeTab].technologies.map((tech, index) => (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    variants={badgeVariants}
                    whileHover={{ y: -2, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="group relative flex min-w-0 items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 bg-[#111111] border border-neutral-800 rounded-lg overflow-hidden cursor-default transition-colors hover:border-neutral-600"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-neutral-800/0 via-neutral-700/10 to-neutral-800/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <span className="relative z-10 flex h-5 min-h-5 items-center justify-center text-sm md:text-base opacity-70 group-hover:opacity-100 transition-opacity leading-none">
                      {getTechIcon(tech)}
                    </span>
                    <span className="relative z-10 text-[10px] md:text-xs font-semibold text-neutral-400 group-hover:text-neutral-200 transition-colors tracking-wide whitespace-normal wrap-break-word leading-tight">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
              
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Experience;