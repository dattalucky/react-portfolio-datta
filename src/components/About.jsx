import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{ opacity:1 , x:0}}
        initial={{opacity:0, x:100}}
        transition={{ duration:1.5}}
        className="my-10 text-center text-4xl">
            About
            <motion.span
            whileInView={{ opacity:1 , x:0}}
            initial={{opacity:0, x:100}}
            transition={{ duration:0.5}}
             className="text-neutral-400"> me </motion.span>
        </motion.h2>
        <div className="flex flex-wrap">

            <motion.div
            whileInView={{ opacity:1 , x:0}}
            initial={{opacity:0, x:100}}
            transition={{ duration:0.5}}
             className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-3xl"src={aboutImg} alt="about"/>
                </div>

            </motion.div>
            <motion.div 
                whileInView={{ opacity:1 , x:0}}
                initial={{opacity:0, x:100}}
                transition={{ duration:0.5}}
                className="w-full lg:w-1/2">
                    <div className="flex-justify-center lg:justify-start">
                    <motion.p 
                    whileInView={{ opacity:1 , x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{ duration:0.5}}
                    
                    className="my-40 max-w-xl py-7">
                        {ABOUT_TEXT}
                    </motion.p>
                    </div>
            </motion.div>  
        </div>
    </div>
  );
};

export default About;