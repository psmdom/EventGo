// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [49.26036, -123.24961],
    zoom: 14
});

function makeIcon(url) {
    return L.icon({
        iconUrl: url,
        iconSize: [35, 50],
        iconAnchor: [17.5, 50],
        popupAnchor: [0, -42.5]
    })
}

const iconChilling = makeIcon('static/images/map-icons/chilling.png');
const iconExploring = makeIcon('static/images/map-icons/exploring.png');
const iconExercising = makeIcon('static/images/map-icons/exercising.png');
const iconSocializing = makeIcon('static/images/map-icons/socializing.png');
const iconStudying = makeIcon('static/images/map-icons/studying.png');
const currentIcon = iconStudying;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Marker functions
function makeMarker(longitude, latitude, icon, description) {
    var marker = L.marker([longitude, latitude], {icon: icon}).addTo(map);
    marker.bindPopup(description);
}

function makeDescription(title, timing, location) {
    return `
        <strong>${title}</strong><br>
        <em>Timing: </em> ${timing} <br>
        <em>Location: </em> ${location}
    `
}


// Sample descriptions:
var studyDescription = makeDescription("Study Session", "Every Tuesday at 3:00 p.m.", "IBLC, Room 192");
var exerciseDescription = makeDescription("Spike Ball", "Every Friday at 5:20 p.m.", "MacInnes Field");

// Sample markers:
makeMarker(49.2674646,-123.2525383, iconStudying, studyDescription);
makeMarker(49.266877, -123.249152, iconExercising, exerciseDescription);