import profilePic from "../assets/projects/profile-pic.png";
import { HERO_CONTENT } from "../constants";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-16 lg:mb-35">
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen lg:min-h-0 lg:items-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-1/2 lg:order-1 order-2 flex flex-col justify-center">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="pb-4 sm:pb-6 md:pb-8 lg:pb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight"
            >
              Dattasai Simhadri
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-transparent block mb-6"
            >
              Data & Devops Engineer
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-relaxed mb-8"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <a
                href="/resume.pdf"
                download="Datta_Sai_Simhadri_Resume.pdf"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-xl border-2 border-slate-700 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:order-2 order-1 flex justify-center lg:justify-end">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative"
          >
            <img
              src={profilePic}
              alt="Datta Sai Simhadri"
              className="rounded-2xl w-64 sm:w-72 md:w-80 lg:w-96 xl:w-md shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;