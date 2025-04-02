//import the nature data
import { postcode, nature } from './data.js';

let galleryCollection = [];
let tagsFilter = [];
let currentLocation = `Manchester`;

postcode.forEach((location) => {
    //if it is the first location, set it as the default location
    let option = `<option value="${location.name}" ${location.name === `Manchester`? `selected=""`: ``}">${location.name}</option>`;
    $(`#from`).append(option);
});

createGalleryCard();
// create gallery card for each destination
function createGalleryCard(){
    nature.forEach((des) => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${des.lat}&longitude=${des.lon}&current=temperature_2m,rain&forecast_days=1`)
        .then((response) =>{
            if (response.status !== 200) {
                console.log(`Looks like there was a problem fetching feeds. Status Code: ${response.status}`);
                return;
            }
            response.json().then((result) => {
                //find manchester in postcode array
                let loc = postcode.find((loc) => loc.name === `Manchester`);
                //get distance selected destination
                des.distance = haversineDistance(loc.lat, loc.lon, des.lat, des.lon);
                let googleMap = `https://www.google.com/maps/search/?api=1&query=${des.name}`
                let galleryCard = $('<div>', {
                    class: 'galleryImg',
                    'data-name': des.name,
                    'data-distance': des.distance,
                    'data-temp': result.current.temperature_2m,
                    'data-rain': result.current.rain,
                    'data-lat': des.lat,
                    'data-lon': des.lon,
                }).append(
                    $('<img>', {
                        src: des.src,
                        alt: des.name
                    }),
                    $('<a>', {
                        class: 'info',
                    }).append(
                        $('<h4>').text(des.name),
                    ),
                    $('<div>', { class: 'info' }).append(
                        $('<span>', { class: 'rain' }).append(
                            $('<span>', { class: 'material-symbols-outlined weather' }).text('rainy'),
                            $('<span>').text(`${result.current.rain}mm`)
                        ),
                        $('<span>', { class: 'distance'}).text(`${des.distance} miles`),
                        $('<span>', { class: 'temp' }).text(`${result.current.temperature_2m}°C`)
                    )
                );
                galleryCollection.push(galleryCard);
                //initialise the gallery
                sortGalleryByDistance();
                initialiseRangeInput();
                initialiseTags();
            })
        })
        .catch((err) => {
            let loc = postcode.find((loc) => loc.name === `Manchester`);
            des.distance = haversineDistance(loc.lat, loc.lon, des.lat, des.lon);
            let googleMap = `https://www.google.com/maps/search/?api=1&query=${des.name}`
            let galleryCard = $('<div>', {
                class: 'galleryImg',
                'data-name': des.name,
                'data-distance': des.distance,
                'data-lat': des.lat,
                'data-lon': des.lon
            }).append(
                $('<img>', {
                    src: des.src,
                    alt: des.name
                }),
                $('<div>', { class: 'info' }).append(
                    $('<a>', {
                        href: googleMap,
                        target: '_blank'
                    }).append(
                        $('<h4>').text(des.name),
                        $('<span>', { class: 'material-symbols-outlined weather' }).text('near_me')
                    ),
                    $('<span>').text(`${des.distance} miles`)
                )
            );
            galleryCollection.push(galleryCard);
            //initialise the gallery
            sortGalleryByDistance();
            initialiseRangeInput();
            initialiseTags();
            console.log(`Fetch Error fetching feeds. :-S`, err);
        });
    });
}

//initialise the gallery
function initialiseGallery(){
    //empty the gallery
    $(`#destinationGallery`).html(``);
    //append the galleryCollection to the gallery
    galleryCollection.forEach((card) => {
        $(`#destinationGallery`).append(card);
    });
}

function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 3958.8; // Radius of the Earth in miles (use 6371 for kilometers)
    const toRadians = (degrees) => degrees * (Math.PI / 180); // Convert degrees to radians

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Math.round(R * c); // Distance in miles
}

const $h1 = $('#topSection h1'); // Select the <h1> in the #topSection
const $topSection = $('#topSection'); // Select the #topSection
$(window).on('scroll', ()=>{
    const topSectionBottom = $topSection.offset().top + $topSection.outerHeight(); // Bottom of #topSection
    const scrollTop = $(window).scrollTop()+500; // Current scroll position

    if (scrollTop >= topSectionBottom) {
        // If the scroll position is past the bottom of #topSection
        $h1.addClass('fixed-h1'); // Add the fixed class
    } else {
        // If the scroll position is within #topSection
        $h1.removeClass('fixed-h1'); // Remove the fixed class
    }
});

$(`#from`).on(`change`, ()=>{
    sortGalleryByDistance();
    initialiseRangeInput();
})

$(`#distanceRange`).on(`change`, ()=>{
    let maxDistance = $(`#distanceRange`).val();
    $(`#maxDistance`).text(maxDistance);
    galleryCollection.forEach((card) => {
        if(card[0].getAttribute(`data-distance`) > maxDistance){
            card[0].style.display = `none`;
        }else{
            card[0].style.display = `block`;
        }
    });
});

function sortGalleryByDistance(){
    let selectedLocation = $(`#from option:selected`).val();
    let loc = postcode.find((loc) => loc.name === selectedLocation);
    //change the data-distance for each galleryCollection
    galleryCollection.forEach((card) => {
        let distance = haversineDistance(loc.lat, loc.lon, card[0].getAttribute('data-lat'), card[0].getAttribute('data-lon'));
        card[0].setAttribute(`data-distance`, distance);
        card[0].children[2].children[1].textContent = `${distance} miles`;
    });
    //change the distance text
    //sort the galleryCollection by distance
    galleryCollection.sort((a, b) => a[0].getAttribute(`data-distance`) - b[0].getAttribute(`data-distance`));
    
    //reinitialise the gallery
    initialiseGallery();
}

function initialiseRangeInput(){
    let longestDistance = Math.max(...galleryCollection.map((card) => card[0].getAttribute(`data-distance`)));
    let maxDistance = Math.ceil(longestDistance/10)*10;
    $(`#maxDistance`).text(maxDistance);
    $(`#distanceRange`).attr(`max`, maxDistance);
    $(`#distanceRange`).val(maxDistance);
}

function initialiseTags(){
    let tags = [];
    $(`.pills`).html(``);
    nature.forEach((des) => {
        des.tags.forEach((tag) => {
            if(!tags.includes(tag)){
                tags.push(tag);
                $(`.pills`).append(`<button class="pill" id="${tag}">${tag}</button>`);
            }
        });
    });
}

function filterByTag(e){
    e.target.classList.toggle(`active`);
    let tag = e.target.id;
    let show = true;
    if(!tagsFilter.includes(tag)){
        tagsFilter.push(tag);
    } else {
        tagsFilter = tagsFilter.filter((t) => t !== tag);
    }
    galleryCollection.forEach((card) => {
        let tags = nature.find((des) => des.name === card[0].getAttribute(`data-name`)).tags;
        //if tags in the card includes any tags selected, show the card
        tagsFilter.forEach((tag) => {
            if(!tags.includes(tag)){
                show = false;
            } else {
                show = true;
            }
        });
        if(show){
            card[0].style.display = `block`;
        } else {
            card[0].style.display = `none`;
        }
    });
}

$('.pills').on('click', '.pill', function (e) {
    filterByTag(e);
});

// Attach a single event listener to the parent container
$('#destinationGallery').on('click', '.galleryImg', function (e) {
    showDestination(e);
    currentLocation = e.currentTarget.dataset.name;
});

function showDestination(e) {
    // Get the clicked element
    let card = $(e.currentTarget); // Use jQuery to wrap the clicked element
    let name = card.data('name'); // Get the data-name attribute
    let des = nature.find((des) => des.name === name); // Find the corresponding data in the nature array

    // Update the background image of #desSection
    $('#desSection').css('background-image', `url(${des.src})`);

    // Update the content of #desSection with destination details
    $('#desSection .content').html(`
        <div class="tags">
            ${des.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="weather-info">
            <span>${card.data('temp')}°C</span>
            <span class="material-symbols-outlined weather">rainy</span>${card.data('rain')}mm
        </div>
        <div class="locationHref">
            <h2>${des.location}</h2><span class="material-symbols-outlined weather">near_me</span>
        </div>
        <h1>${des.name}</h1>
        <p>${des.description}</p>
    `);
    // Show the #desSection
    $('#desSection').css('display', 'flex');
    //scroll to the #desSection
    $('html, body').animate({
        scrollTop: $('#desSection').offset().top
    }, 0);
}

// Initialize the map and set its view to a specific location and zoom level
const map = L.map('map').setView([53.483959, -2.244644], 10); // Example: Manchester coordinates

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
const marker = L.marker([53.483959, -2.244644]).addTo(map);
marker.bindPopup('<b>Manchester</b><br>Starting Point');

// Loop through all destinations in the nature array and add markers to the map
nature.forEach((des) => {
    const marker = L.marker([des.lat, des.lon]).addTo(map);
    marker.bindPopup(`
        <b>${des.name}</b><br>
        ${des.location}<br>
        <a href="https://www.google.com/maps/search/?api=1&query=${des.name}" target="_blank">View on Google Maps</a>
    `);
});

// locationHref on click change the map focus according to the location
$('.content').on('click', '.locationHref', (e) => {
    let loc = nature.find((des) => des.name === currentLocation);
    map.setView([loc.lat, loc.lon], 10);
    marker.setLatLng([loc.lat, loc.lon]);
    marker.bindPopup(`
        <b>${loc.name}</b><br>
        ${loc.location}<br>
        <a href="https://www.google.com/maps/search/?api=1&query=${loc.name}" target="_blank">View on Google Maps</a>
    `).openPopup();
    //jump to map
    $('html, body').animate({
        scrollTop: $('#map').offset().top
    }, 0);
});
