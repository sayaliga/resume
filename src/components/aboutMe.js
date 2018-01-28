import React from "react";
import SocialIcons from './socialIcons.js';

const imageurl = `${process.env.PUBLIC_URL}/images/photo.png`;

let aboutMe = () => {
    return (
        <section id="aboutme">
            <div className="row">
                <div className="col-sm-3 picture-container">
                    <img alt="This is how I look" className="img-thumbnail" src={imageurl}></img>
                    <div className="layer"><SocialIcons /></div>
                </div>
                <div className="col-sm-6 introduction">
                    <p>
                        Hi there!
                    </p>
                    <p>
                        I am Sayali, a front end developer from Pune, India.
                        I have enjoyed working in this field for 2.5 years now
                        and I continue to enjoy learning new things in this ever changing dynamic field.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default aboutMe;