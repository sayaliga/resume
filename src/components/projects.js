import React from "react";

const alttext = "Click me to get the project details!";
const style = {
    width: '100px',
    height: '100px'
};
const imageurl = `${process.env.PUBLIC_URL}/images/logo`;

const projects = () => {
    return (
        <div className="container-fluid well">
            <div className="row">
                <div className="col-sm-2">
                    <img src={`${imageurl}/html5.svg`} alt={alttext} className="img-responsive thumbnail" style={style}></img>
                    <b>HTML5</b>
                </div>
                <div className="col-sm-2">
                    <img src={`${imageurl}/css3.svg`} alt={alttext} className="img-responsive thumbnail" style={style}></img>
                    <b>CSS3</b>
                </div>
                <div className="col-sm-2">
                    <img src={`${imageurl}/javascript.svg`} alt={alttext} className="img-responsive thumbnail" style={style}></img>
                    <b>JavaScript</b>
                </div>
                <div className="col-sm-2">
                    <img src={`${imageurl}/react.svg`} alt={alttext} className="img-responsive thumbnail" style={style}></img>
                    <b>React.js</b>
                </div>
                <div className="col-sm-2">
                    <img src={`${imageurl}/angular.svg`} alt={alttext} className="img-responsive thumbnail" style={style}></img>
                    <b>Angular JS</b>
                </div>
            </div>
        </div>
    );
};

export default projects;