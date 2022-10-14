import Main from './Components/MainComponent';
import './App.css';
import Header from './Components/HeaderComponent';
import Footer from './Components/FooterComponent';
import About from './Components/AboutComponent';
import Skill from './Components/SkillComponent';
import Project from './Components/ProjectComponent';
import ContactForm from './Components/ContactFormComponent';
import { Route, BrowserRouter, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Main />
       <BrowserRouter>
                <Routes>
                    <Route exact path= "/" component = {Header} />
                    <Route exact path= "/about" component = {About} />
                    <Route exact path= "/skills" component = {Skill} />
                    <Route exact path= "/projects" component = {Project} />
                    <Route exact path= "/contact" component = {ContactForm} />
                </Routes>
                
            </BrowserRouter>
            
       
      </div>
  );
}

export default App;
