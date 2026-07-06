import Hero from "../sections/Hero";
import NavBar from "../components/Navbar";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

function MainPage() {

  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default MainPage
