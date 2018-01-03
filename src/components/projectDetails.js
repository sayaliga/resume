import React from "react";
import ReactDOM from 'react-dom';

class ProjectDetails extends React.Component {
    render() {
        return(
            <div className="row projectDescription">
                <div className="col-sm-10">
                    <ul>
                        {
                            this.props.description.map((value, index) =>
                                <li key={index}>{value}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
};

export default ProjectDetails;