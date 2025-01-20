import About from "./Components/About/About";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <div className="bg-[#11141f] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
      
      
    </div>
  );
}

export default App;
