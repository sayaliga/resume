import React, { Component } from 'react';
import AboutMe from './components/aboutMe.js';
import EduQualification from './components/eduQualification.js';
import Experience from './components/experience.js';
import Skills from './components/skills.js';
import NavBar from './components/navBar.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="section-container">
            <AboutMe />
            <EduQualification />
            <Skills />
        </div>
      </div>
    );
  }
}

export default App;
