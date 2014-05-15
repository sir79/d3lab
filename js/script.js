var	margin = {top: 30, right: 40, bottom: 30, left: 50},
	width = 600 - margin.left - margin.right,
	height = 270 - margin.top - margin.bottom;

//var	parseDate = d3.time.format("%d-%b-%y").parse;

var	x = d3.time.scale().range([0, width]);
var	y = d3.scale.linear().range([height, 0]);

var	xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(5);

var	yAxis = d3.svg.axis().scale(y).orient("left").ticks(5);

var	valueline = d3.svg.line()
	.x(function(d) { return x(d.date); })
	.y(function(d) { return y(d.timeMedian); });

// var	valueline2 = d3.svg.line()
// 	.x(function(d) { return x(d.date); })
// 	.y(function(d) { return y(d.open); });

var	svg = d3.select("body")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Get the data
// d3.csv("data2b.csv", function(error, data) {
// 	data.forEach(function(d) {
// 		d.date = parseDate(d.date);
// 		d.close = +d.close;
// 		d.open = +d.open;
// 	});


