import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 px-4 sm:px-6 md:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 sm:my-16 md:my-20 text-center text-2xl sm:text-3xl md:text-4xl"
      >
        Projects
      </motion.h2>
      
      {/* Container to prevent wide-screen stretching */}
      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            // Mobile: Centered stack | Desktop: Left-aligned row
            className="mb-12 flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-6 md:gap-10"
          >
            {/* Image Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/4 flex justify-center md:justify-start"
            >
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                // Slightly increased image size constraints for better visibility
                className="mb-4 md:mb-0 rounded-lg w-48 sm:w-56 md:w-40 lg:w-48 object-cover"
              />
            </motion.div>

            {/* Details Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              // Flex-col here ensures the text and badges stack and align correctly
              className="w-full max-w-2xl md:w-3/4 flex flex-col items-center md:items-start"
            >
              <h6 className="mb-3 font-semibold text-xl sm:text-2xl text-white">
                {project.title}
              </h6>
              
              <p className="mb-6 text-neutral-400 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies Badge Container */}
              <div 
                // CHANGED: Added justify-center for mobile and md:justify-start for desktop
                className="flex flex-wrap justify-center md:justify-start gap-2"
              >
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    // CHANGED: Brighter purple and border for better contrast
                    className="rounded-lg bg-neutral-900 px-3 py-1.5 text-xs sm:text-sm font-medium text-purple-400 border border-neutral-800"
                  >
                    {tech}
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

export default Projects;