import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-6 md:px-8">
        <motion.h2 
            whileInView={{ opacity:1 , y:0}}
            initial={{opacity:0, y:-100}}
            transition={{ duration:0.5}}
             className="my-8 sm:my-12 md:my-10 text-center text-2xl sm:text-3xl md:text-4xl"> Get in Touch </motion.h2> 
        <div className="text-center tracking-tighter">
            
            <motion.p
            whileInView={{ opacity:1 , x:0}}
            initial={{opacity:0, x:100}}
            transition={{ duration:1}} 
             className="my-4 text-sm sm:text-base md:text-lg">{CONTACT.phoneNo}</motion.p>
            <motion.a
            whileInView={{ opacity:1 , x:0}}
            initial={{opacity:0, x:-100}}
            transition={{ duration:1}}  href="#" className="border-b text-sm sm:text-base md:text-lg">
                {CONTACT.email}
            </motion.a>
        </div>
    </div>
  )
}

export default Contact