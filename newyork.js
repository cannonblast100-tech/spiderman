const map = L.map('map').setView(
[40.7128, -74.0060],
14
);


const redIcon = new L.Icon({
iconUrl:
'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',

shadowUrl:
'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',

iconSize:[25,41],
iconAnchor:[12,41],
popupAnchor:[1,-34]
});

L.tileLayer(
'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
{
maxZoom:19
}
).addTo(map);

L.marker(
[40.7580,-73.9855],
{icon:redIcon}
)
.addTo(map)
.bindPopup("🕷️ Spider-Man Spotted");

L.marker([40.7282,-73.7949])
.addTo(map)
.bindPopup("🏠 Peter Parker's Queens");

L.marker([40.7061,-74.0086])
.addTo(map)
.bindPopup("🏙️ Wall Street");

L.marker([40.7505,-73.9934])
.addTo(map)
.bindPopup("🚇 Midtown");

L.circle(
[40.7128,-74.0060],
{
radius:30000,
color:"#e62429",
weight:3,
fillOpacity:0.05
}
).addTo(map);