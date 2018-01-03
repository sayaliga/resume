import React from "react";
import ReactDOM from 'react-dom';
import { BarChart } from 'react-easy-chart';

let data  = [
 { x: 'HTML', y: 9},
 { x:'CSS', y: 9},
 { x:'JavaScript', y: 8},
 { x:'jQuery', y: 6},
 { x:'Bootstrap', y: 8},
 { x:'Node.js', y: 7.5},
 { x:'React.js', y: 7},
 { x:'Redux', y: 7},
];

var skills = () => {
    return (
        <section>
            <div className="skillchart">
                <div className="skillsguide">
                   Self-assessment :
                </div>
                <BarChart
                axes
                width={650}
                height={400}
                colorBars
                grid
                yDomainRange={[0, 10]}
                data={data}/>
            </div>
        </section>
    );
};


export default skills;