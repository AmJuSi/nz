let lat = -42.118611111111;
let lng = 171.32694444444;
let zoom = 13;

// let map2 = L.map('map').setView([lat, lng], zoom); // L steht für leaflet; andere Methode als unterhalb
// {} object literals, innerhalb sind key-values mit kommas getrennt; wie python dictionarys
var map = L.map('map', {
    center: [lat, lng], // [] Array o. Liste, einträge mit komma getrennt
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup(`
    <h2>Pancake Rocks</h2>
    <br>Here you can find the Pancake Rocks.
    <ul>
        <li> Breite: ${lat.toFixed(5)} </li>
        <li> Länge: ${lng.toFixed(5)}</li>
    </ul>
`).openPopup();

L.control.scale({
    imperial: false,
    maxWidth: 100
}).addTo(map);

//GeoJson 
let jsonPunkt = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [lng, lat]
    },
    "properties": {
        "name": "Pancake Rocks"
    }
}