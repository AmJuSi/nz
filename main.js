var map = L.map('map').setView([47.426944444444, 11.4216666666671771], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([47.426944444444, 11.4216666666671771]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();