import React, { Component } from 'react';
import logo from './logo.svg';
import AboutMe from './components/aboutMe.js';
import EduQualification from './components/eduQualification.js';
import Experience from './components/experience.js';
import Skills from './components/skills.js';

class App extends Component {
  render() {
    return (
      <div>
        <AboutMe />
        <EduQualification />
        <Experience />
        <Skills />
      </div>
    );
  }
}

export default App;
