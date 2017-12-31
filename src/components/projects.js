import React from "react";
import ProjectDetails from "./projectDetails";
import ProjectThumbnail from "./projectThumbnail";

const skills = ['HTML5','CSS','JavaScript','Perl','Reactjs'];
class Projects extends React.Component {
    constructor() {
        super();
        this.filterBy = this.filterBy.bind(this);
        this.state = {
            imageUrl: '',
            description: []
        }
        this.projectdetails = '';
    }
    componentDidMount() {
        const getUrl = 'https://raw.githubusercontent.com/sayaliga/react-resume/master/public/projectdetails.json';
        window.fetch(getUrl)
            .then( res => res.text() )
            .then( text => {
                this.projectdetails = JSON.parse(text);
            });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row well">
                    { skills.map((skill) =>
                        <ProjectThumbnail key={skill} skill={skill} displayDetails={this.filterBy.bind(this, skill)}/>
                    )}
                </div>
                <ProjectDetails skill={this.state.skill} description={this.state.description} />
            </div>
        );
    }
    filterBy(skill) {
        this.setState(this.projectdetails[skill]);
    }
};

export default Projects;