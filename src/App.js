import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Education from "./components/Education/education";
import Credentials from "./components/Credentials/credentials";
import Experience from "./components/Experience/experience";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Skills/>
        <Works/>
        <Education/>
        <Credentials/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;