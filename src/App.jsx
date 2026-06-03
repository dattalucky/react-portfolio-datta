import { useEffect, useState } from "react";
import Projects from "./components/Projects";
import Education from "./components/Education"; 
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";


const App = () => {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch (e) {
      return "dark";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("theme", mode);
    } catch (e) {
      /* ignore */
    }
  }, [mode]);

  const background =
    mode === "dark"
      ? "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)"
      : "radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%)";

  const textClass = mode === "dark" ? "text-neutral-300" : "text-neutral-900";

  return (
    <div className={`overflow-x-hidden ${textClass} antialiased selection:bg-cyan-300 selection:text-cyan-900 ${mode==="classic"?"classic":""}`}>

      {/* Background Gradient */}
      <div className="fixed top-0 -z-10 h-full w-full" style={{
        background: background
      }}></div>

      <div className="container mx-auto px-3 sm:px-6 md:px-8 pt-32 text-center md:text-left">
        <Navbar mode={mode} toggleTheme={() => setMode(mode === "dark" ? "classic" : "dark")} />
        <Hero mode={mode} />
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