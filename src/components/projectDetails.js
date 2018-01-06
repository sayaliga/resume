import React from "react";
import ReactDOM from 'react-dom';

class ProjectDetails extends React.Component {
    render() {
        return(
                    <ul>
                        {
                            this.props.description.map((value, index) =>
                                <li key={index}>{value}</li>
                            )
                        }
                    </ul>
        )
    }
};

export default ProjectDetails;