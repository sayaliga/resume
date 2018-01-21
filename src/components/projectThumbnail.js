import React from "react";

const alttext = "Click me to get the project details!";
const style = {
    width: "100px",
    height: "100px"
};
const imageurl = `${process.env.PUBLIC_URL}/images/logo`;

class ProjectThumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeInSkill = this.handleChangeInSkill.bind(this);
    }
    handleChangeInSkill(e) {
        this.props.displayDetails(e.target.value);
    }
    render() {
        return (
            <div className="projectThumbnail" onClick={this.handleChangeInSkill}>
                <img src={`${imageurl}/${this.props.skill}.svg`} alt={alttext} className="img-responsive thumbnail" style={style}></img>
                <div><b>{this.props.skill}</b></div>
            </div>
        )
    }
}

export default ProjectThumbnail;