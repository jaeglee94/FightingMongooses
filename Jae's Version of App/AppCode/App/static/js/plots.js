anychart.onDocumentReady(function(){
    //creating the data
    var data = [
        {from: "American Airlines", to: "Dallas", weight: 96839},
        {from: "American Airlines", to: "Chicago", weight: 71819},
        {from: "American Airlines", to: "Philadelphia", weight: 55544},
        {from: "American Airlines", to: "Los Angeles", weight: 38994},
        {from: "American Airlines", to: "New York", weight: 35486},
        {from: "Delta", to: "Atlanta", weight: 304647},
        {from: "Delta", to: "New York", weight: 6358},
        {from: "Delta", to: "Chicago", weight: 22426},
        {from: "Delta", to: "Tampa", weight: 20265},
        {from: "Delta", to: "Houston", weight: 18547},
        {from: "Southwest", to: "Chicago", weight: 207078},
        {from: "Southwest", to: "Orlando", weight: 130341},
        {from: "Southwest", to: "Atlanta", weight: 127267},
        {from: "Southwest", to: "Los Angeles", weight: 77588},
        {from: "Southwest", to: "Dallas", weight: 58278},
    ]
   //calling the Sankey function
   var sankey_chart = anychart.sankey(data);
   //customizing the width of the nodes
   sankey_chart.nodeWidth("20%");
   //setting the chart title
   sankey_chart.title("Top Destinations by Airline");
   //customizing the vertical padding of the nodes
   sankey_chart.nodePadding(15);
   //customizing the visual appearance of nodes
   sankey_chart.node().normal().fill("#A1BFE4 0.8");
   sankey_chart.node().hovered().fill(anychart.color.darken("#64b5f7"));
   sankey_chart.node().normal().stroke("#455a63", 2);
   //customizing the visual appearance of flows
   sankey_chart.flow().normal().fill("#F26D6D 0.7");
   sankey_chart.flow().hovered().fill(anychart.color.darken("#ffa000"));
   sankey_chart.flow().hovered().stroke("#455a63");
   //setting the container id
   sankey_chart.container("sankey");
   //initiating drawing the Sankey diagram
   sankey_chart.draw();
});