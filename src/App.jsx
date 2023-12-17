import logo from "./logo.svg";
import "./App.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AOS from "aos"; 
import "aos/dist/aos.css"
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Blog from "./Components/BLOG/Blog";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills.jsx";
import Testimonial from "./Components/Testimonial/Testimonial.jsx";


<script>
AOS.init();

</script>


function App() {
  




  return <>
    <Navbar/>
    <div id="homePage"><Home/></div>
    <div id="aboutPage"><About/></div>
    <div id="skillsPage"><Skills/></div> 
    <div id="services"><Services/></div>
    <div id="projects"><Projects/></div>
    <div id="testimonial"><Testimonial/></div>
    <div id="blog"><Blog/></div>
    <div id="contact"><Contact/></div>
 
    </>
  
}

export default App;
