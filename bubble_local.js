function loadData(dataPath){

	var r = 800,
		format = d3.format(",d"),
		fill = d3.scale.category20c();

	var bubble = d3.layout.pack()
		.sort(null)
		.size([r, 580]);

	var vis = d3.select("#chart").append("svg")
		.attr("id","svg")
		.attr("width", r)
		.attr("height", 580)
		.attr("class", "bubble");

	//d3.json("./bubble-data.json", function(json) {
	d3.json(dataPath, function(json) {
	  var node = vis.selectAll("g.node")
		  .data(bubble.nodes(classes(json))
		  .filter(function(d) { return !d.children; }))
		.enter().append("g")
		  .attr("class", "node")
		  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

	  node.append("title")
		  .text(function(d) { return d.className + ": " + format(d.value); });

	  node.append("circle")
		  .attr("r", function(d) { return d.r; })
		  .style("fill", function(d) { return fill(d.packageName); });

	  node.append("text")
		  .attr("text-anchor", "middle")
		  .attr("dy", ".3em")
		  .text(function(d) { return d.className.substring(0, d.r / 3); });
		  
	  //node.exit().remove();
	});
 
	// Returns a flattened hierarchy containing all leaf nodes under the root.
	function classes(root) {
	  var classes = [];

	  function recurse(name, node) {
		if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
		else classes.push({packageName: name, className: node.name, value: node.size});
	  }

	  recurse(null, root);
	  return {children: classes};
	}

}

function init(){
  
    loadData("./environment-data.json");

    d3.select("#A0")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./environment-data.json");
        });
    d3.select("#A1")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./A1-data.json");
        });
    d3.select("#A2")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./A2-data.json");
        });
    d3.select("#A3")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./A3-data.json");
        });
    d3.select("#A4")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./A4-data.json");
        });
    d3.select("#A5")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./A5-data.json");
        });
    d3.select("#A6")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./A6-data.json");
        });
    d3.select("#A7")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./A7-data.json");
        });
    d3.select("#A8")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./A8-data.json");
        }); 
	d3.select("#A9")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./A9-data.json");
        });   
		d3.select("#A10")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./A10-data.json");
        });    
		d3.select("#A11")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./A10-data.json");
        });      
		d3.select("#B1")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
        });      
		d3.select("#B2")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./B2-data.json");
        });      
		d3.select("#B3")
        .on("click", function(d,i) {
		    d3.select("#svg").remove();
            loadData("./A10-data.json");
        });   
}