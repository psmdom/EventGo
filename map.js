// New Variables
var titles = "Study Session";
var timings = "Every Tuesday at 3 PM";
var locations = "Room 101, Library";

var RealContent = `
  <strong>${titles}</strong><br>
  <em$>Timing:</em${timings}<br>
  <em>Location:</em> ${locations}
`;


// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [49.26036, -123.24961],
    zoom: 14
});

function makeIcon(url) {
    return L.icon({
        iconUrl: url,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -32]
    })
}

const iconChilling = makeIcon('static/images/icons/icon-chilling.png')
const iconExploring = makeIcon('static/images/icons/icon-exploring.png')
const iconExercising = makeIcon('static/images/icons/icon-exercising.png')
const iconSocializing = makeIcon('static/images/icons/icon-socializing.png')
const iconStudying = makeIcon('static/images/icons/icon-studying.png')
const currentIcon = iconExercising

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// var marker = L.marker([49.26036, -123.24961]).addTo(map);
var marker = L.marker([49.26036, -123.24961], {icon: currentIcon}).addTo(map);
marker.bindPopup(RealContent)
// var marker = L.marker([49.28036, -123.24961]).addTo(map);
// var marker = L.marker([49.26036, -123.25961]).addTo(map);
// var marker = L.marker([49.27036, -123.25961]).addTo(map);
// var marker = L.marker([49.28036, -123.25961]).addTo(map);
// var marker = L.marker([49.26036, -123.26961]).addTo(map);
// var marker = L.marker([49.27036, -123.26961]).addTo(map);
// var marker = L.marker([49.28036, -123.26961]).addTo(map);
