import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import ProjectDetails from "./projectDetails";

const alttext = "Click me to get the project details!";
const style = {
    width: "100px",
    height: "100px"
};
const imageurl = `${process.env.PUBLIC_URL}/images/logo`;

const projects = ({match}) => {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row well">
                    <div className="col-sm-2">
                        <Link to={`${match.url}/html`}>
                            <img src={`${imageurl}/html5.svg`} alt={alttext} className="img-responsive thumbnail" style={style}></img>
                            <b>HTML5</b>
                        </Link>
                    </div>
                    <div className="col-sm-2">
                        <Link to={`${match.url}/css`}>
                            <img src={`${imageurl}/css3.svg`} alt={alttext} className="img-responsive thumbnail" style={style}></img>
                            <b>CSS3</b>
                        </Link>
                    </div>
                    <div className="col-sm-2">
                        <Link to={`${match.url}/javascript`}>
                            <img src={`${imageurl}/javascript.svg`} alt={alttext} className="img-responsive thumbnail" style={style}></img>
                            <b>JavaScript</b>
                        </Link>
                    </div>
                    <div className="col-sm-2">
                        <Link to={`${match.url}/reactjs`}>
                            <img src={`${imageurl}/react.svg`} alt={alttext} className="img-responsive thumbnail" style={style}></img>
                            <b>React.js</b>
                        </Link>
                    </div>
                    <div className="col-sm-2">
                        <Link to={`${match.url}/angular`}>
                            <img src={`${imageurl}/angular.svg`} alt={alttext} className="img-responsive thumbnail" style={style}></img>
                            <b>Angular JS</b>
                        </Link>
                    </div>
                </div>
                <Route path={`${match.url}/:name`} component={ProjectDetails}/>
            </div>
        </Router>
    );
};

export default projects;