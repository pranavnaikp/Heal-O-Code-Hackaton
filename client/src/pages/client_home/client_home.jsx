
import { useState } from "react";
import React from "react";
import "./client_home.css"
import Navbar from "../../components/SideNav/Navbar";
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;




const Client_home=()=>{
const [weight,setWeight]=useState(0);
const [height,setHeight]=useState(0);
const [bmi,setBmi] = useState(0);


const handleSubmit=(e)=>{
e.preventDefault();
setBmi(weight/(height*height));
}



const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title:{
        text: "Simple Column Chart with Index Labels"
    },
    axisY: {
        includeZero: true
    },
    data: [{
        type: "column", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: [
            { x: 10, y: 71 },
            { x: 20, y: 55 },
            { x: 30, y: 50 },
            { x: 40, y: 65 },
            { x: 50, y: 71 },
            { x: 60, y: 68 },
            { x: 70, y: 38 },
            { x: 80, y: 92, indexLabel: "Highest" },
            { x: 90, y: 54 },
            { x: 100, y: 60 },
            { x: 110, y: 21 },
            { x: 120, y: 49 },
            { x: 130, y: 36 }
        ]
    }]
}

    return(
        <>
      <Navbar/>

      <h1 className="intro">Welcome "username"</h1>
      <div className="bmicont">
         <h2 className="title">Enter your details</h2>
         <form onSubmit={handleSubmit}>
      <label className="weight"><h3>Enter your weight:</h3>
        <input 
          type="text" 
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
<br/>
      <label className="height"><h3>Enter your height:</h3>
        <input 
          type="text" 
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
<br/>
      <input className="button" type="submit" />
    </form>

    <h1 className="bmi">
        {bmi}
    </h1>
      </div>

      <div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
        </>
    )
}

export default Client_home;