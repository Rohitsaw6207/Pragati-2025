import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Allocation } from "./components/Pages/Allocation";

import { Contact } from "./components/Pages/Contact";
import { Roomstart } from "./components/Pages/Roomstart";

import MouseShadow from "./components/MouseShadow";


import Innovation from "./components/Pages/Innovation";
import CodingAndEngineering from "./components/Pages/CodingAndEngineering";
import QuizAndMathAptitude from "./components/Pages/QuizAndMathAptitude";
import Gaming from "./components/Pages/Gaming";
import Robotics from "./components/Pages/Robotics";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <MouseShadow />
        {/* <div className="pages"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allocation" element={<Allocation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/roomstart" element={<Roomstart />} />

          <Route path="/innovation" element={<Innovation />} />
        <Route path="/coding-and-engineering" element={<CodingAndEngineering />} />
        <Route path="/quiz-and-math-aptitude" element={<QuizAndMathAptitude />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/robotics" element={<Robotics />} />

        </Routes>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
