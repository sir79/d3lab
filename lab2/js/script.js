var w1 = window,
	d1 = document,
	e1 = d1.documentElement,
	g1 = d1.getElementsByTagName('body')[0],
	x1 = w1.innerWidth || e1.clientWidth || g1.clientWidth,
	y1 = w1.innerHeight|| e1.clientHeight|| g1.clientHeight;

var margin = {top: 50, right: 50, bottom: 50, left: 50},
	width = x1 - margin.left - margin.right,
	height = y1 - margin.top - margin.bottom;

var format = d3.time.format("%a");

var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis().scale(x)
	.orient("bottom").ticks(d3.time.hour, 12);

var yAxis = d3.svg.axis().scale(y)
	.orient("left");

var valueline = d3.svg.line()
	.x(function(d) { return x(d.date); })
	.y(function(d) { return y(d.clicks); });

var svg = d3.select("#graph")
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.json("data2.json", function(error, data) {
	data.forEach(function(d) {
		d.date = new Date(d.date * 1000);
		d.clicks = +d.clicks;
	});

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.date; }));
	y.domain([0, d3.max(data, function(d) { return d.clicks; })]);

	svg.append("path")      // Add the valueline path.
		.attr("d", valueline(data));

	svg.append("g")         // Add the X Axis
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

	svg.append("g")         // Add the Y Axis
		.attr("class", "y axis")
		.call(yAxis);

});

function updateWindow(){
	x1 = w1.innerWidth || e1.clientWidth || g1.clientWidth;
	y1 = w1.innerHeight|| e1.clientHeight|| g1.clientHeight;

	width = x1 - margin.left - margin.right,
	height = y1 - margin.top - margin.bottom;
	//svg.attr("width", x).attr("height", y);
	svg.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
}
