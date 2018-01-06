import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutMe from './aboutMe';
import EduQualification from './eduQualification.js';
import Experience from './experience.js';
import Skills from './skills.js';
import Projects from './projects.js';
import SocialIcons from './socialIcons.js'

var navBar = () => {
    return (
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li className="active"><Link to="/">About Me</Link></li>
                <li className="eduqualification"><Link to="/eduqualification">Education</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <ul className="nav pull-right">
                    <li>
                        <SocialIcons />
                    </li>
                </ul>
            </ul>
            <div className="clear"></div>
                <Route exact path="/" component={AboutMe} />
                <Route exact path="/eduqualification" component={EduQualification} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/projects" component={Projects} />
        </div>
    )
}

export default navBar;