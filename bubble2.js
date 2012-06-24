function loadData(dataPath){

	var r = 800,
		format = d3.format(",d"),
		fill = d3.scale.category20c();

	var bubble = d3.layout.pack()
		.sort(null)
		.size([r, 600]);

	var vis = d3.select("#chart2").append("svg")
		.attr("id","svg2")
		.attr("width", r)
		.attr("height", 600)
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

function init2(){
  
    loadData("./BubbleChart/paradigm-data.json");

    d3.select("#dataA")
        .on("click", function(d,i) {
		    d3.select("#svg2").remove();
            loadData("./BubbleChart/bubble-data.json");
        })   
}