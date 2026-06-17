import Hero from "../sections/Hero";
import NavBar from "../components/Navbar";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";

function MainPage() {

  return (
    <>
      <Hero/>
      <NavBar/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
    </>
  )
}

export default MainPage
