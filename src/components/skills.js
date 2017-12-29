import React from "react";
import ReactDOM from 'react-dom';
import { BarChart } from 'react-easy-chart';

let data  = [
 { x: 'HTML', y: 9},
 { x:'CSS', y: 9},
 { x:'JavaScript', y: 8},
 { x:'jQuery', y: 6},
 { x:'Bootstrap', y: 8},
 { x:'Node.js', y: 8},
 { x:'React.js', y: 8.5},
 { x:'Redux', y: 8},
];

var skills = () => {
    return (
        <BarChart axes colorBars
        height={300}
        width={650}
        data={data}/>
    );
};


export default skills;