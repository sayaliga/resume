import React from "react";

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