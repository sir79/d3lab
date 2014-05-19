nv.addGraph(function() {
	var chart = nv.models.lineChart()
		.showYAxis(true)
		.showXAxis(true);

	chart.xAxis()
		.axisLabel('Day')
		.tickFormat(d3.format(',r'));

	chart.yAxis()
		.axisLabel('Clicks')
		.tickFormat('d');

	d3.select('#chart svg')    //Select the <svg> element you want to render the chart in.
		.datum(getData())         //Populate the <svg> element with chart data...
		.call(chart);          //Finally, render the chart!

	//Update the chart when window resizes.
	nv.utils.windowResize(function() { chart.update() });
	return chart;
});

function getData() {
	var dates = [];
	var clicks= [];
	//var waitingTimes[];

	d3.json("data.json", function (error, data) {
		data.forEach(function (d) {
			dates.push(new Date(d.date * 1000));
			clicks.push(d.clicks);
		});
	});

	return[
		{
			values: clicks,
			key: 'Clicks'
		}
	];
}