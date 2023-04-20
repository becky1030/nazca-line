mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/satellite-v9", // style URL
  center: [-75.1312, -14.6986], // starting position [lng, lat]
  zoom: 13, // starting zoom
  pitch: 20,
});

// create the popup
const popup1 = new mapboxgl.Popup({ offset: 25 }).setText("The Lizard ");
const popup2 = new mapboxgl.Popup({ offset: 25 }).setText(
  "The Hummmingbird(small)"
);
const popup3 = new mapboxgl.Popup({ offset: 25 }).setText("The Mushroom");
const popup4 = new mapboxgl.Popup({ offset: 25 }).setText("The Spral Tears");
const popup5 = new mapboxgl.Popup({ offset: 25 }).setText("The Star");
const popup6 = new mapboxgl.Popup({ offset: 25 }).setText("The Needles");
const popup7 = new mapboxgl.Popup({ offset: 25 }).setText("The Nazca Lines");

// create marker for each geoglyth
const marker1 = new mapboxgl.Marker({
  color: "brown",
})
  .setLngLat([-75.1382, -14.7011])
  .setPopup(popup1)
  .addTo(map);
const marker2 = new mapboxgl.Marker({
  color: "brown",
})
  .setLngLat([-75.1264, -14.6973])
  .setPopup(popup2)
  .addTo(map);
const marker3 = new mapboxgl.Marker({
  color: "brown",
})
  .setLngLat([-75.1307, -14.7064])
  .setPopup(popup3)
  .addTo(map);
const marker4 = new mapboxgl.Marker({
  color: "brown",
})
  .setLngLat([-75.1511, -14.7084])
  .setPopup(popup4)
  .addTo(map);
const marker5 = new mapboxgl.Marker({
  color: "brown",
})
  .setLngLat([-75.1489, -14.6922])
  .setPopup(popup5)
  .addTo(map);
const marker6 = new mapboxgl.Marker({
  color: "brown",
})
  .setLngLat([-75.1449, -14.6911])
  .setPopup(popup6)
  .addTo(map);
const marker7 = new mapboxgl.Marker({
})
  .setLngLat([-75.1312, -14.6986])
  .setPopup(popup7)
  .addTo(map);

//reset the map view
document.querySelector("#reset-view").addEventListener("click", () => {
  map.flyTo({
    center: [-75.1312, -14.6986], // starting position [lng, lat]
    zoom: 13, // starting zoom
    pitch: 20,
  });
});

//fly to Spider
document.querySelector("#fly-to-g1").addEventListener("click", () => {
  map.flyTo({
    center: [-75.1382, -14.7011],
    zoom: 18,
    pitch: 50,
  });
});

document.querySelector("#fly-to-g2").addEventListener("click", () => {
  map.flyTo({
    center: [-75.1264, -14.6973],
    zoom: 18,
    pitch: 50,
  });
});
document.querySelector("#fly-to-g3").addEventListener("click", () => {
  map.flyTo({
    center: [-75.1307, -14.7064],
    zoom: 18,
    pitch: 50,
  });
});
document.querySelector("#fly-to-g4").addEventListener("click", () => {
  map.flyTo({
    center: [-75.1511, -14.7084],
    zoom: 18,
    pitch: 50,
  });
});

// document.querySelector('#fly-to-g5').click()
// .click will click the previous object
// document:a document that include all html actions

// dom (document object model): open API, use js to use this API, and utilize in HYML tags
// js script need to place after, if load before, the html body can not be found
// querySelector: match the html tag to this selector
document.querySelector("#fly-to-g5").addEventListener("click", () => {
  map.flyTo({
    center: [-75.1489, -14.6922],
    zoom: 18,
    pitch: 50,
  });
});
document.querySelector("#fly-to-g6").addEventListener("click", () => {
  map.flyTo({
    center: [-75.1449, -14.6911],
    zoom: 18,
    pitch: 50,
  });
});

// https://www.heritagedaily.com/2018/04/10-ancient-geoglyphs/118915 geoglyths resources cited from this website

map.on("load", function () {
  map.addSource("geoglyths", {
    type: "geojson",
    data: "./geoglyths.geojson",
  });

  map.addLayer({
    id: "geoglyths-layer",
    type: "circle",
    source: "geoglyths",
    paint: {
      "circle-radius": 2.5,
      "circle-stroke-width": 1,
      "circle-color": "red",
      "circle-stroke-color": "white",
    },
  });
});
