import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import AboutMe from "./Components/AboutMe"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Acheivements from "./Components/Acheivements"
import ProjectDetail from './Components/ProjectDetail';

import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path ="/projects" element={<Projects/>}/>
        <Route path="/project/:name" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/achievements" element={<Acheivements/>}/>
    </Routes>
    </>
  );
}

export default App;
