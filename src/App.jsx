import Projects from "./components/Projects";
import Education from "./components/Education"; 
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased
      selection:bg-cyan-300 selection:text-cyan-900">

      <div className= "fixed top-0 -z-10 h-full w-full">

      
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
         <Education /> 
         <Projects />
         <Contact />
         
      </div>
      
    </div>

  );
} ;

export default App;