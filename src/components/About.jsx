import aboutImage from "../assets/projects/about-image.png";
import { ABOUT_TEXT } from "../constants";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 sm:my-16 md:my-20 text-center text-2xl sm:text-3xl md:text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 p-3 sm:p-4 md:p-6"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl w-64 sm:w-72 md:w-80 lg:w-full" src= {aboutImage}  alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 px-3 sm:px-4 md:px-6"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-4 sm:py-6 text-sm sm:text-base md:text-lg">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;