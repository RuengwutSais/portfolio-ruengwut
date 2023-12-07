import NavbarComponent from "./component/navbar";
import AboutComponent from "./component/about";
import HomeComponent from "./component/home";
import ProjectComponent from "./component/project";
import ExperienceComponent from "./component/experience";
import ContactComponent from "./component/contact";
import { Element } from 'react-scroll';


function App() {
  return (
    <>
      <NavbarComponent />
      <Element name="home" className="element">
        <HomeComponent/>
      </Element>
      
      <Element name="about" className="element">
        <AboutComponent />
      </Element>

      <Element name="experience" className="element">
        <ExperienceComponent />
      </Element>

      <Element name="project" className="element">
        <ProjectComponent />
      </Element>

      <Element name="contact" className="element">
        <ContactComponent />
      </Element>
    </>
  );
}

export default App;
