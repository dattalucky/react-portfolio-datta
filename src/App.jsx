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
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      {/* Background Gradient */}
      <div className="fixed top-0 -z-10 h-full w-full" style={{
        background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)'
      }}></div>
      
      <div className="container mx-auto px-3 sm:px-6 md:px-8 pt-32 text-center md:text-left">
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
};

export default App;