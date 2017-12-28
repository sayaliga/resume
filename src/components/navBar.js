import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutMe from './aboutMe';
import EduQualification from './eduQualification.js';
import Experience from './experience.js';
import Skills from './skills.js';

var navBar = () => {
    return (
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li><Link to="/">About Me</Link></li>
                <li className="eduqualification"><Link to="/eduqualification">Education</Link></li>
                <li><Link to="/skills">Skills</Link></li>
            </ul>
                <Route exact path="/" component={AboutMe} />
                <Route exact path="/eduqualification" component={EduQualification} />
                <Route exact path="/skills" component={Skills} />
        </div>
    )
}

export default navBar;