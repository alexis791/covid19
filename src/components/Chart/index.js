import React from 'react'
import CanvasJSReact from '../../assets/js/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends React.Component {


	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: ""
			},
			axisY: {
				title: "Casos confirmados",
				includeZero: false,
				suffix: " "
			},
			data: [{
				type: "splineArea",
				xValueFormatString: "YYYY",
				yValueFormatString: "Casos Confirmados",
				showInLegend: true,
				legendText: "Recuperados",
				dataPoints: [
          { x: new Date("2020-04-02"), y: 10 },
          { x: new Date("2020-04-03"), y: 30 }
				]
			},{
				type: "splineArea",
				xValueFormatString: "YYYY",
				yValueFormatString: "Dia",
				showInLegend: true,
				legendText: "Muertes",
				dataPoints: [
          { x: new Date("2020-04-02"), y: 10 },
          { x: new Date("2020-04-03"), y: 30 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default Chart