import React from "react";

let skillset  = {
    'HTML': 90,
    'CSS': 90,
    'JavaScript': 80,
    'jQuery': 80,
    'Bootstrap': 60,
    'React.js': 80,
    'Angular.js': 75,
    'Node.js': 70
};

class skills extends React.Component {
    componentDidMount() {
        let scores = Object.values(skillset);
        function loading() {
			var progressbars = document.getElementsByClassName('bar');
			for (var i=0; i<progressbars.length; i++) {
				progress.call(progressbars[i],scores[i]);
			}
			function progress(score) {
				var cb = setInterval(() => {
					var currentvalue = this.getAttribute('value');
					if(currentvalue < score ) {
						var newval = Number(currentvalue) + 10;
						this.setAttribute('value', newval );
					}
					else {
						clearInterval(cb);
					}
				}, 70);
			}
        }
        loading();
    }
    render() {
        return (
            <section>
                <div className="container">
                {
                    Object.keys(skillset).map(function(skill){
                        return (
                            <div className="row" key={skill}>
                                <div className="col-sm-1">
                                    <span>{skill}</span>
                                </div>
                                <div className="col-sm-8">
                                    <progress className="bar" value="0" max="100"></progress>
                                </div>
                                <div className="col-sm-1">
                                    <span>{skillset[skill]}</span>
                                </div>
                            </div>
                        );
                    })
                }            ​
                </div>
                <div className="container">
                    Besides these, I'm comfortable with using JS-based build tools like Grunt, Gulp, and Bower.
                    <br />
                    I have worked with version control systems like GIT and perforce.
                </div>
            </section>
        );
    }
}


export default skills;