import React from "react";
import ReactDOM from 'react-dom';

const getUrl = 'https://raw.githubusercontent.com/sayaliga/react-resume/master/public/projectdetails.json';

const projectDetails = ({match}) => {
    return(
        <div>{match.params.name}</div>
    )
};

export default projectDetails;