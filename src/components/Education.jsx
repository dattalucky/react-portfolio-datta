import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 px-4 sm:px-6 md:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 sm:my-16 md:my-20 text-center text-2xl sm:text-3xl md:text-4xl"
      >
        Education
      </motion.h2>
      
      {/* CHANGED: Added max-w-5xl and mx-auto to prevent the layout from stretching too far on wide screens */}
      <div className="max-w-5xl mx-auto">
        {EDUCATION.map((education, index) => (
          <div 
            key={index} 
            className="mb-8 flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 md:gap-8"
          >
            {/* Year Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/4 flex justify-center md:justify-start"
            >
              {/* CHANGED: Added md:mt-1.5 to vertically align the year text with the large College heading */}
              <p className="mb-2 text-sm sm:text-base text-neutral-400 font-medium md:mt-1.5">
                {education.year}
              </p>
            </motion.div>

            {/* Details Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl md:w-3/4 flex flex-col items-center md:items-start"
            >
              <h6 className="mb-2 font-semibold text-lg sm:text-xl md:text-2xl text-white">
                {education.college}
              </h6>
              
              <p className="mb-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                {education.description}
              </p>
              
              <p className="mb-4 text-sm sm:text-base text-neutral-400 font-medium">
                {education.Group}
              </p>
              
              {/* GPA Badge Container */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {education.GPA.map((gpa, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-neutral-900 px-3 py-1 text-xs sm:text-sm font-semibold text-purple-400 border border-neutral-800"
                  >
                    {gpa}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;