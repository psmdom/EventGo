function constrcutIconObject(url) {
    return L.icon({
        iconUrl: url,
        iconSize: [35, 50],
        iconAnchor: [17.5, 50],
        popupAnchor: [0, -42.5]
    })
}

const Categories = Object.freeze({
    CHILLING: {icon: constrcutIconObject('static/images/map-icons/chilling.png'), list: [], visible: true},
    EXERCISING: {icon: constrcutIconObject('static/images/map-icons/exercising.png'), list: [], visible: true},
    EXPLORING: {icon: constrcutIconObject('static/images/map-icons/exploring.png'), list: [], visible: true},
    SOCIALIZING: {icon: constrcutIconObject('static/images/map-icons/socializing.png'), list: [], visible: true},
    STUDYING: {icon: constrcutIconObject('static/images/map-icons/studying.png'), list: [], visible: true}
});

const Locations = Object.freeze({   
    ALLARD: { position: [49.270013, -123.253314] },
    SAUDER: { position: [49.26514, -123.253885] },
    MEDICAL_SCHOOL: { position: [49.262505, -123.245224] },
    BEATY_BIODIVERSITY: { position: [49.26323, -123.250977] },
    MUSEUM_OF_ANTHROPOLOGY: { position: [49.269473, 123.25946] },
    EARTHQUAKE_ENGINEERING: { position: [49.262814, -123.251974] },
    DAVID_STRANGWAY: { position: [49.2658998,-123.2485868] },
    BIOMEDICAL_RESEARCH: { position: [ 49.2640731,-123.2470508] },
    TOTEM_PARK: { position: [ 49.2580136,-123.2555449] },
    PLACE_VANIER: { position: [49.2646816,-123.2611698] },
    GAGE_TOWERS: { position: [49.269691,-123.2518995] },
    MARINE_DRIVE: { position: [49.2615961,-123.2585585] },
    FAIRVIEW_CRESCENT: { position: [49.2633125,-123.2427608] },
    IKB_LIBRARY: { position: [49.2676038,-123.2527386] },
    WOODWARD_LIBRARY: { position: [49.2644947,-123.249834] },
    LAW_LIBRARY: { position: [49.2697988,-123.2561645] },
    CHAN_CENTRE: { position: [49.2698,-123.255851] },
    FREDERIC_WOOD: { position: [49.2683065,-123.257307] },
    BELKIN_ART_GALLERY: { position: [49.268245,-123.256301] },
    THUNDERBIRD_SPORTS_CENTRE: { position: [49.2600575,-123.2416822] },
    AQUATIC_CENTRE: { position: [49.2677587,-123.2487584] },
    WAR_MEMORIAL_GYM: { position: [49.2666872,-123.2477647] },
    LIFE_BUILDING: { position: [49.2676248,-123.2501682] },
    BOOKSTORE: { position: [49.2652012,-123.2503841] },
    HEALTH_SERVICES: { position: [49.2641259,-123.2457641] },
    OLD_AUDITORIUM: { position: [49.2658096,-123.2589044] },
    CLOCK_TOWER: { position: [49.267337,-123.2545625] },
    ROSE_GARDEN: { position: [49.2693791,-123.2564979] },
    BOTANICAL_GARDEN: { position: [49.2541042,-123.2507623] },
    TRIUMF: { position: [49.2477653,-123.2309023] },
    AMS_STUDENT_NEST: { position: [49.266612,-123.2500257] },
    WRECK_BEACH: { position: [49.260187,-123.2665235] },
    KOERNER: {position: [49.2666555,-123.2552087]},
    MACINNES_FIELD: {position: [49.2668708, -123.2491213]},
    UBC: {position: [49.26036, -123.24961]}
});

// function updateMap() {
    // initialize the map on the "map" div with a given center and zoom
    var map = L.map('map', {
        center: [49.26036, -123.24961],
        zoom: 14
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 14,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // var markersToDisplay = [];

    // if (Categories.CHILLING.visible) {
    //     markersToDisplay.push(CHILLING.list)
    // } else if (Categories.EXERCISING.visible) {
    //     markersToDisplay.push(EXERCISING.list)
    // } else if (Categories.EXPLORING.visible) {
    //     markersToDisplay.push(EXPLORING.list)
    // } else if (Categories.SOCIALIZING.visible) {
    //     markersToDisplay.push(SOCIALIZING.list)
    // } else if (Categories.STUDYING.visible) {
    //     markersToDisplay.push(STUDYING.list)
    // } 

    // markersToDisplay.forEach(element => {
    //     element.forEach(element => {
    //         formattedDescription = formatDescription(element.title, element.time, element.place, element.description);
    //         makeMarker(element.location.position, element.category.icon, formatDescription)
    //     })
    // });
// }

// // initialize for the first time
// updateMap();

function makeEvent(category, location, title, time, place, description) {
    category.list.push({
        category: category,
        location: location,
        title: title,
        time: time,
        place: place,
        description: description
    });
    
    formattedDescription = formatDescription(title, time, place, description);
    makeMarker(location.position, category.icon, formattedDescription);
}

function formatDescription(title, time, location, description) {
    return `
        <strong>${title}</strong><br>
        <em>Time: </em> ${time} <br>
        <em>Location: </em> ${location} <br>
        <em>Description: </em> ${description}
    `
}

function makeMarker(position, icon, formattedDescription) {
    var marker = L.marker(position, {icon: icon}).addTo(map);
    marker.bindPopup(formattedDescription);
}

// Sample descriptions:
var studyDescription = formatDescription("Study Session", "Every Tuesday at 3:00 p.m.", "IBLC, Room 192", "Come become an academic weapon with SUS.");
var exerciseDescription = formatDescription("Spikeball", "Every Friday at 5:20 p.m.", "MacInnes Field", "Come play competitive or casual spikeball.");

// Sample markers:
makeMarker(Locations.IKB_LIBRARY.position, Categories.STUDYING.icon, studyDescription);
makeMarker(Locations.MACINNES_FIELD.position, Categories.EXERCISING.icon, exerciseDescription);

// Setting the src of image
document.getElementById("sidebar-icon").src = SBIconPath;

// Filters

// Get modal, filter icon and popup elements
var modal = document.getElementById("filterModal");
var filterIcon = document.getElementById("filter-icon");
var applyFiltersButton = document.getElementById("applyFilters");

// Open the popup when the filter icon is clicked
filterIcon.onclick = function () {
    modal.style.display = "block";
}

// Close the popup when clicking anywhere outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Close the popup when the "Apply Filters" button is clicked
applyFiltersButton.onclick = function () {
    var selectedFilters = [];

    if (document.getElementById("filterOption1").checked) {
        selectedFilters.push("Option 1");
    }
    if (document.getElementById("filterOption2").checked) {
        selectedFilters.push("Option 2");
    }
    if (document.getElementById("filterOption3").checked) {
        selectedFilters.push("Option 3");
    }
    if (document.getElementById("filterOption4").checked) {
        selectedFilters.push("Option 4");
    }

    alert("Selected Filters: " + selectedFilters.join(", "));
    modal.style.display = "none"; // Close modal after applying filters
}