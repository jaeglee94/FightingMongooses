// queryUrl
var queryUrl = "http://127.0.0.1:5000/api";

var markers=[];
var aaRoutes=[];
var dlRoutes=[];
var wnRoutes=[];

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  for(i=0;i<Object.keys(data).length;i++){
    markers.push(
      L.circle([data[i+1]['Source Airport Latitude'],data[i+1]['Source Airport Longitude']], {
        stroke: false,
        fillOpacity: 0.75,
        color: "black",
        fillColor: "black",
        radius: 25000
      }).bindPopup("<h3>" + data[i+1]['Source Airport Name'] + "</h3><hr>")
    )
    if(data[i+1]['Airline'] =='AA'){
      aaRoutes.push(
        L.polyline([
          [data[i+1]['Source Airport Latitude'],data[i+1]['Source Airport Longitude']],
          [data[i+1]['Destination Airport Latitude'],data[i+1]['Destination Airport Longitude']]
        ],{
          color: "#C0C0C0",
          weight: 1
        })
      )
    }
    else if (data[i+1]['Airline'] == 'DL'){
      dlRoutes.push(
        L.polyline([
          [data[i+1]['Source Airport Latitude'],data[i+1]['Source Airport Longitude']],
          [data[i+1]['Destination Airport Latitude'],data[i+1]['Destination Airport Longitude']]
        ],{
          color: "#FF0000",
          weight: 1
        })
      )
    }
    else if (data[i+1]['Airline'] == 'WN'){
      wnRoutes.push(
        L.polyline([
          [data[i+1]['Source Airport Latitude'],data[i+1]['Source Airport Longitude']],
          [data[i+1]['Destination Airport Latitude'],data[i+1]['Destination Airport Longitude']]
        ],{
          color: "#0000FF",
          weight: 1
        })
      )
    }
  };
var aa = L.layerGroup(aaRoutes);
var dl = L.layerGroup(dlRoutes);
var wn = L.layerGroup(wnRoutes);
var airports = L.layerGroup(markers);
createMap(airports,aa,dl,wn)
})

//CREATE MAP FUNCTION IS HERE

function createMap(airports,al1,al2,al3) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Airports: airports,
    AmericanAirlines:al1,
    Delta:al2,
    Southwest:al3
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("leaflet", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [streetmap, airports]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}
