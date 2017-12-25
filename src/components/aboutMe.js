import React from "react";

var aboutMe = () => {
    return (
        <div className="container-fluid">
            <header>
                <h1>About me</h1>
            </header>
            <section>
                <p className="inroduction">
                    <p>
                        Hi There!
                    </p>
                    <p>
                        I am Sayali, a front end developer from Pune, India.
                        I have enjoyed working in this field for 2.5 years now
                        and I continue to enjoy learning new things in this ever changing dynamic field.
                    </p>
                </p>
                <ul>
                    <li>
                        <b>Name:</b> Sayali Mahadeo Gaikwad
                    </li>
                    <li>
                        <b>Birth date:</b> 15th April 1994
                    </li>
                    <li>
                        <b>Lives in:</b> Pune, India
                    </li>
                    <li>
                        <b>Contact details:</b>
                        <ul>
                            <li>Email address: sayali.gaikwad1994@gmail.com</li>
                            <li>Mobile number: 9028108150</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default aboutMe;