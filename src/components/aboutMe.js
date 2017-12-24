import React from "react";

var aboutMe = () => {
    return (
        <div className="container-fluid">
            <header>
                <h1>About me</h1>
            </header>
            <section className="well">
                <p className="inroduction">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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