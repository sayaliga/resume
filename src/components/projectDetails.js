import React from "react";
import ReactDOM from 'react-dom';

class ProjectDetails extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-sm-5">
                    <img src={this.props.imageUrl} />
                </div>
                <div className="col-sm-7">
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