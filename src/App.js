import React, { Component } from 'react';
// import ReactGA from 'react-ga';
// import $ from 'jquery';
import resumeData from './resumeData.json';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        <Portfolio data={resumeData.portfolio}/>
        <Testimonials data={resumeData.testimonials}/>
        <Contact data={resumeData.main}/>
        <Footer data={resumeData.main}/>
    </div>
  );
}

export default App;
