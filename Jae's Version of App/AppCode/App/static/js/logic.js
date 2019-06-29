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

