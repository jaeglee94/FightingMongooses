var queryUrl = "http://127.0.0.1:5000/coordinates";

// // Perform a GET request to the query URL
d3.json(queryUrl, function(data) {

        // // var city = data[i];
        // L.marker(data["Source Airport Latitude"],data["Source Airport Longitude"])
        //   .addTo(myMap)
// Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/c34aaa0b1b3cddad335173cb7bc0181897201ee6/2011_february_aa_flight_paths.csv', 
// function(err, rows){
//     function unpack(rows, key) {
//         return rows.map(function(row) { return row[key]; });}
//     function getMaxOfArray(numArray) {
//         return Math.max.apply(null, numArray);
//     }
    var data = [];
    // var startAirport = data["Source Airport Name"];
    var startLongitude = data["Source Airport Longitude"];
    var endLongitude = data["Destination Airport Longitude"];
    var startLat = data["Source Airport Latitude"];
    var endLat = data["Destination Airport Latitude"];

    // for ( var i = 0 ; i < count.length; i++ ) {
        for(i=0;i<Object.keys(data).length;i++){
        var opacityValue = count[i]/getMaxOfArray(count);

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
            opacity: opacityValue
        };

        data.push(result);
        console.log(data);
        console.log(startLongitude);
        console.log(endLongitude);
        console.log(startLat);
        console.log(endLat);
    };

    var layout = {
        title: 'Flight Paths',
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