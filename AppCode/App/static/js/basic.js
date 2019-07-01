var queryUrl = "http://127.0.0.1:5000/api";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
    var aaCount = 0
    var dlCount = 0
    var wnCount = 0
    for(i=0;i<Object.keys(data).length;i++){
        if(data[i+1]["Airline"] == "AA"){
            aaCount = aaCount + 1
        }else if(data[i+1]["Airline"]=="DL"){
            dlCount = dlCount+1
        }else if(data[i+1]["Airline"]=="WN"){
            wnCount = wnCount + 1
        }else{
            console.log('Airline counting error')
        }
    }
    var data = [
        {
          x: ['American', 'Delta', 'Southwest'],
          y: [aaCount, dlCount, wnCount],
          marker:{
              color:['#C0C0C0','#FF0000','#0000FF']
          },
          type: 'bar'
        }
      ];
    
    var layout = {
        title: 'Count of Domestic Routes by Airline'
    };
      Plotly.newPlot('bar', data,layout);
})

// Quarterly Revenue
var trace1 = {
    y: ['2014 Q4', '2014 Q3', '2014 Q2', '2014 Q1'],
    x: [9995000000, 11355000000, 11139000000, 10161000000],
    name: 'American Airlines',
    type: 'bar',
    marker: {
        color: 'rgb(192,192,192)'
      },
    orientation: 'h',
  };
 
  var trace2 = {
    y: ['2014 Q4', '2014 Q3', '2014 Q2', '2014 Q1'],
    x: [8916000000, 10621000000, 11178000000, 9647000000],
    name: 'Delta Airlines',
    type: 'bar',
    marker: {
        color: 'rgb(255,0,0)'
      },
    orientation: 'h'
  };
 
  var trace3 = {
    y: ['2014 Q4', '2014 Q3', '2014 Q2', '2014 Q1'],
    x: [4166000000, 5011000000, 4800000000, 4628000000],
    name: 'SouthWest Airlines',
    type: 'bar',
    marker: {
        color: 'rgb(0,0,255)'
      },
    orientation: 'h'
  };
 
 
  var data = [trace1, trace2, trace3];
 
  var layout = {
      barmode: 'group',
      title: '2014 Revenue by Quarter'
    };
 
  Plotly.newPlot('quarter', data, layout);