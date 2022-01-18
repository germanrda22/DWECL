google.charts.load('current', { 'packages': ['corechart'] });

google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable([
		["Party", "number of seats", { role: "style" }],
		["PSOE", 120, "red"], 
		["PP", 89, "blue"],
		["VOX", 52, "greenyellow"],
		["Podemos", 26, "purple"],
		["ERC", 13, "darkgoldenrod"],
		["Ciudadanos", 10, "orange"],
		["JxCat", 8, "pink"],
		["PNV", 6, "green"],
		["EH Bildu", 5, "forestgreen"],
		["MP", 3, "turquoise"],
		["CUP-PR", 2, "yellow"],
		["CCA-PNC-NC", 2, "darkkhaki"],
		["NA+", 2, "blueviolet"],
		["BNG", 1, "cornflowerblue"],
		["PRC", 1, "chartreuse"],
		["¡TERUEL EXISTE!", 1, "darkolivegreen"]
	]);

	var view = new google.visualization.DataView(data);
	view.setColumns([0, 1,
		{
			calc: "stringify",
			sourceColumn: 1,
			type: "string",
			role: "annotation"
		},
		2]);

	var options = {
		title: "Election results, 10/11/2019",
		width: 900,
		height: 500,
		bar: { groupWidth: "95%" },
		legend: { position: "none" },
	};
	var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
	chart.draw(view, options);
}

google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
	var data = google.visualization.arrayToDataTable([
		["Party", "number of seats", { role: "style" }],
		["PSOE", 120, "red"],
		["PP", 89, "blue"],
		["VOX", 52, "greenyellow"],
		["Podemos", 26, "purple"],
		["ERC", 13, "darkgoldenrod"],
		["Ciudadanos", 10, "orange"],
		["JxCat", 8, "pink"],
		["PNV", 6, "green"],
		["EH Bildu", 5, "forestgreen"],
		["MP", 3, "turquoise"],
		["CUP-PR", 2, "yellow"],
		["CCA-PNC-NC", 2, "darkkhaki"],
		["NA+", 2, "blueviolet"],
		["BNG", 1, "cornflowerblue"],
		["PRC", 1, "chartreuse"],
		["¡TERUEL EXISTE!", 1, "darkolivegreen"]
	]);

	var options = {
		title: 'My Daily Activities',
		is3D: true,
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
	chart.draw(data, options);
}