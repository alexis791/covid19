import React from 'react'
import CanvasJSReact from '../../assets/js/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends React.Component {
  constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
  }
  
	render() {
    const {confirmed, deaths } = this.props.dataSet
		const options = {
			theme: "light",
			  animationEnabled: true,
			  toolTip: {
				  shared: true
			  },
			  legend: {
          verticalAlign: "left",
          horizontalAlign: "bottom",
          reversed: true,
          cursor: "pointer",
          itemclick: this.toggleDataSeries
			  },
			data: [{
        type: "area",
        name:"Recuperados",
				xValueFormatString: "DD YYYY",
				yValueFormatString: "##",
				showInLegend: true,
				legendText: "Recuperados",
				dataPoints: confirmed
			},{
        type: "area",
        name:"Muertos",
				xValueFormatString: "DD YYYY",
				yValueFormatString: "##",
				showInLegend: true,
				legendText: "Muertes",
				dataPoints: deaths
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