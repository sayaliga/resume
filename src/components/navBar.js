import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AboutMe from './aboutMe';
import EduQualification from './eduQualification.js';
import Skills from './skills.js';
import Projects from './projects.js';
import ContactMe from './contactMe.js';

let baseUrl = '/resume';

let navBar = () => {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li><Link to={baseUrl}>About Me</Link></li>
                    <li><Link to={`${baseUrl}/eduqualification`}>Education</Link></li>
                    <li><Link to={`${baseUrl}/skills`}>Skills</Link></li>
                    <li><Link to={`${baseUrl}/projects`}>Projects</Link></li>
                    <li><Link to={`${baseUrl}/contactMe`}>Contact me!</Link></li>
                </ul>
                <div className="clear"></div>
                <div>
                    <Route exact path={baseUrl} component={AboutMe} />
                    <Route exact path={`${baseUrl}/eduqualification`} component={EduQualification} />
                    <Route exact path={`${baseUrl}/skills`} component={Skills} />
                    <Route exact path={`${baseUrl}/projects`} component={Projects} />
                    <Route exact path={`${baseUrl}/contactMe`} component={ContactMe} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default navBar;