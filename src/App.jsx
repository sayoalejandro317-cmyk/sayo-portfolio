import './App.css'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#111] text-gray-300">
      

      <nav className="sticky top-0 z-50 flex gap-6 p-4 bg-[#111] border-b border-gray-800 justify-center">
        <a href="#home" className="hover:text-white transition">Home</a>
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#resume" className="hover:text-white transition">Resume</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>


      <main className="p-8 flex flex-col gap-32">
        <section id="home">
          <Home />
        </section>
        
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        
        <section id="resume" className="scroll-mt-20">
          <Resume />
        </section>
        
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

    </div>
  );
}

export default App;