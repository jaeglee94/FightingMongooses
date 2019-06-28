//Store API endpoint inside queryURL
var queryUrl = "https://127.0.0.1:5000/api/";

//Get request to query URL
d3.json(queryUrl, function(err, rows){
    console.log(data);
//need to grab source lat and long and destination lat and long to build route map
//need to loop through the db
//source airport latitude, source airport longitude, destination airport latitude, destination airport longitude
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });}

    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }

    var data = [];
    var count = unpack(rows, 'cnt');
    var startLongitude = unpack(rows, 'start_lon');
    var endLongitude = unpack(rows, 'end_lon');
    var startLat = unpack(rows, 'start_lat');
    var endLat = unpack(rows, 'end_lat');

    for ( var i = 0 ; i < count.length; i++ ) {
        // var opacityValue = count[i]/getMaxOfArray(count);

        var result = {
            type: 'scattergeo',
            locationmode: 'USA-states',
            lon: [ startLongitude[i] , endLongitude[i] ],
            lat: [ startLat[i] , endLat[i] ],
            mode: 'lines',
            line: {
                width: 1,
                color: 'red'
            },
            // opacity: opacityValue
        };

        data.push(result);
    };

    var layout = {
        title: 'Airline flight paths',
        showlegend: false,
        geo:{
            scope: 'north america',
            projection: {
                type: 'azimuthal equal area'
            },
            showland: true,
            landcolor: 'rgb(243,243,243)',
            countrycolor: 'rgb(204,204,204)'
        }
    };

    Plotly.plot(myDiv, data, layout, {showLink: false});

});