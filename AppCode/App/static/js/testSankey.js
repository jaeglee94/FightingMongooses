anychart.onDocumentReady(function(){
    //creating the data
    var data = [
        {from: "American Airlines", to: "Dallas", weight: 50},
        {from: "American Airlines", to: "Chicago", weight: 50},
        {from: "American Airlines", to: "New York", weight: 50},
        {from: "Delta", to: "Atlanta", weight: 50},
        {from: "Delta", to: "New York", weight: 50},
        {from: "Delta", to: "Chicago", weight: 50},
        {from: "Southwest", to: "Los Angeles", weight: 50},
        {from: "Southwest", to: "Dallas", weight: 50},
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
   sankey_chart.node().normal().fill("#C0C0C0 0.8");
   sankey_chart.node().hovered().fill(anychart.color.darken("#64b5f7"));
   sankey_chart.node().normal().stroke("#455a63", 2);
   //customizing the visual appearance of flows
   sankey_chart.flow().normal().fill("#0000FF 0.7");
   sankey_chart.flow().hovered().fill(anychart.color.darken("#ffa000"));
   sankey_chart.flow().hovered().stroke("#455a63");
   //setting the container id
   sankey_chart.container("sankey");
   //initiating drawing the Sankey diagram
   sankey_chart.draw();
});