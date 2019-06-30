var queryUrl = "http://127.0.0.1:5000/api";

// Perform a GET request to the query URL

var dict = {};
d3.json(queryUrl, function(data) {
    for(i=0;i<Object.keys(data).length;i++){
        if(data[i+1]['Destination Airport City'] in dict){
            dict[data[i+1]['Destination Airport City']
        }
    }
})