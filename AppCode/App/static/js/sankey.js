var queryUrl = "http://127.0.0.1:5000/api";

// Perform a GET request to the query URL

var dict = {};
var aa = {}
var dl = {}
var wn = {}
d3.json(queryUrl, function(data) {
    for(i=0;i<Object.keys(data).length;i++){
        if(data[i+1]['Destination Airport City'] in dict){
            dict[data[i+1]['Destination Airport City']] = dict[data[i+1]['Destination Airport City']]+1
        }
        else{
            dict[data[i+1]['Destination Airport City']]=1
        }
    }
    // Create items array
    var items = Object.keys(dict).map(function(key) {
        return [key, dict[key]];
    });
    
    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    
    // Create a new array with top 20 destinations
    var destinations = [];
    for (i=0;i<20;i++){
        destinations.push(items[i][0]);
    }

    //Get values by airline
    for(i=0;i<Object.keys(data).length;i++){
        if(data[i+1]['Airline'] =="AA"){
            if(data[i+1]['Destination Airport City'] in aa){
                aa[data[i+1]['Destination Airport City']] = aa[data[i+1]['Destination Airport City']]+1
            }
            else{
                aa[data[i+1]['Destination Airport City']] = 1
            }
        }
        else if(data[i+1]['Airline'] =="DL"){
            if(data[i+1]['Destination Airport City'] in dl){
                dl[data[i+1]['Destination Airport City']] = dl[data[i+1]['Destination Airport City']]+1
            }
            else{
                dl[data[i+1]['Destination Airport City']] = 1
            }
        }
        else if(data[i+1]['Airline'] =="WN"){
            if(data[i+1]['Destination Airport City'] in wn){
                wn[data[i+1]['Destination Airport City']] = wn[data[i+1]['Destination Airport City']]+1
            }
            else{
                wn[data[i+1]['Destination Airport City']] = 1
            }
        }
        else{
            console.log('Error with Route count in Sankey')
        }
    }
    var sankeyData= []
    for(i=0;i<destinations.length;i++){
        sankeyData.push({from: "American Airlines", to: destinations[i], weight: aa[destinations[i]]})
        sankeyData.push({from: "Delta", to: destinations[i], weight: dl[destinations[i]]})
        sankeyData.push({from: "Southwest", to: destinations[i], weight: wn[destinations[i]]})
    }

    anychart.onDocumentReady(function(){
       //calling the Sankey function
       var sankey_chart = anychart.sankey(sankeyData);
       //customizing the width of the nodes
       sankey_chart.nodeWidth("20%");
       //setting the chart title
       sankey_chart.title("Top 20 Destinations");
       //customizing the vertical padding of the nodes
       sankey_chart.nodePadding(15);
        //node colors
        var nodeColors = {
            'American Airlines':'#C0C0C0',
            'Delta':'#FF0000',
            'Southwest': '#0000FF'
        }
       //customizing the visual appearance of nodes
       sankey_chart.node().normal().fill("#C0C0C0 0.8");
       sankey_chart.node().hovered().fill(anychart.color.darken("#64b5f7"));
       sankey_chart.node().normal().stroke("#455a63", 2);
       //customizing the visual appearance of flows
       sankey_chart.flow().normal().fill(function(){
           return nodeColors[this.name] ||this.sourceColor;
       });
       sankey_chart.flow().hovered().fill(anychart.color.darken("black"));
       sankey_chart.flow().hovered().stroke("#455a63");
       //setting the container id
       sankey_chart.container("sankey");
       //initiating drawing the Sankey diagram
       sankey_chart.draw();
    });
})