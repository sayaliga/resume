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
        this.skill = '';
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
        let stateParam = this.state.imageUrl;
        let thumbnailList = (
            <div className="thumbnail-container">
                { skills.map((skill) =>
                    <ProjectThumbnail key={skill} skill={skill} displayDetails={this.filterBy.bind(this, skill)}/>
                )}
            </div>
        );
        if(stateParam) {
            return (
                <section>
                    <div className="container-fluid">
                        <div className="projectDetail-cotainer">
                            <div className="projectThumbnail">
                                <ProjectThumbnail skill={this.skill} />
                            </div>
                            <div className="projectDetails">
                                <ProjectDetails skill={this.props.skill} description={this.state.description} />
                            </div>
                        </div>
                        <section>
                            {thumbnailList}
                        </section>
                    </div>
                </section>
            )
        }
        else {
            return (
                <section>
                    {thumbnailList}
                </section>
            );
        }
    }
    filterBy(skill) {
        this.skill = skill;
        this.setState(this.projectdetails[skill]);
    }
};

export default Projects;