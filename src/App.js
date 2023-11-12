import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="abou">
          <About />
        </section>
        <section id="skill">
          <Technologies />
        </section>
        <section id="pro">
          <Projects />
        </section>
        <section id="con">
          <Contact />
        </section>
      </main>
      <Footer />
    </Router>
    
  );
}

export default App;
