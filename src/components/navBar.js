import React from "react";

var navBar = () => {
    return (
        <nav className="navbar navbar-fixed-top">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li><a className="text-center" href="#aboutme">About Me</a></li>
                    <li><a className="text-center" href="#eduqualification">Education</a></li>
                    <li><a className="text-center" href="#skills">Skills</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default navBar;