import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AboutMe from './aboutMe';
import EduQualification from './eduQualification.js';
import Skills from './skills.js';
import Projects from './projects.js';
import ContactMe from './contactMe.js';

var navBar = () => {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">About Me</Link></li>
                    <li className="eduqualification"><Link to="/eduqualification">Education</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contactMe">Contact me!</Link></li>
                </ul>
                <div className="clear"></div>
                <div>
                    <Route exact path="/" component={AboutMe} />
                    <Route exact path="/eduqualification" component={EduQualification} />
                    <Route exact path="/skills" component={Skills} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contactMe" component={ContactMe} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default navBar;