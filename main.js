let lat = -42.118611111111;
let lng = 171.32694444444;
let zoom = 13;

let map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup(`<b>Pancake Rocks</b><br>Here you can find the Pancake Rocks.`).openPopup();
