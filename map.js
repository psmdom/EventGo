// New Variables
var titles = "Study Session";
var timings = "Every Tuesday at 3 PM";
var locations = "Room 101, Library";

var RealContent = `
  <strong>${titles}</strong><br>
  <em>Timing: </em> ${timings} <br>
  <em>Location: </em> ${locations}
`;


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

const iconChilling = makeIcon('static/images/map-icons/chilling.png')
const iconExploring = makeIcon('static/images/map-icons/exploring.png')
const iconExercising = makeIcon('static/images/map-icons/exercising.png')
const iconSocializing = makeIcon('static/images/map-icons/socializing.png')
const iconStudying = makeIcon('static/images/map-icons/studying.png')
const currentIcon = iconExercising

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([49.26036, -123.24961], {icon: currentIcon}).addTo(map);
marker.bindPopup(RealContent)
// var marker = L.marker([49.26036, -123.24561]).addTo(map);