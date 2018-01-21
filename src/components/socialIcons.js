import React from "react";

let socialIcons = () => {
    return(
        <ul className="navbar-nav list-inline socialicons">
            <li>
                <a href="#">
                    <i className="fa fa-facebook text-center" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa fa-twitter text-center" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa fa-google text-center" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    )
}

export default socialIcons;