

var myMap = L.map("map").setView([39.8283, -98.5795], 4);

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myMap);

var queryUrl = "http://127.0.0.1:5000/coordinates";
    console.log(queryUrl);

d3.json(queryUrl, function(data) {
    for(i=0;i<Object.keys(data).length;i++){
        // var city = data[i];
        L.marker(data["Source Airport Latitude"],data["Source Airport Longitude"])
          .addTo(myMap)

    }
})

// // Connect lat/lons from source to destination
// var line = [
//     [data["Source Airport Latitude"],data["Source Airport Longitude"]],
//     [data["Destination Airport Latitude"],data["Destination Airport Longitude"]]
//   ];
//   L.polyline(line, {
//     color: "black"
//   }).addTo(myMap);

