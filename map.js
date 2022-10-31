

// ADD YOUR MAPBOX ACCESS TOKEN
mapboxgl.accessToken = "pk.eyJ1IjoiYmV0aHRlcyIsImEiOiJjbDl3dHNzZDEwMzV1M3FvZWcxY2l1anNoIn0.WrO7OEaBfTQ9Dm2GlWZ8gA"

// CREATE A NEW OBJECT CALLED MAP
const map = new mapboxgl.Map({
  container: "map", // container ID for the map object (this points to the HTML element)
  style: "mapbox://styles/bethtes/cl9wty6hi000914mj0tzen6yo", 
  center: [-75.1652, 39.9526], // starting position [lng, lat]
  zoom: 12, // starting zoom
  projection: "globe", // display the map as a 3D globe
});

// ADD A GEOJSON SOURCE THAT POINTS TO YOUR LOCAL FILE
map.on("load", function () {
    map.addSource("heat", {
      type: "geojson",
      data: "./heatVulnerability.geojson",
    });
   
    // ADD A LAYER TO THE MAP
    map.addLayer({
      id: "heat",
      type: "fill",
      source: "heat",
      layout: {},
      paint: {
        "fill-color": "#00ffff",
        "fill-opacity": 0.9,
      },
    });
  });
  
