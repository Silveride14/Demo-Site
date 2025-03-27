const nature = [
    {name: `Peak District`, src: `img/peak-district.jpeg`, lat: 53.3430, lon: -1.7722, tags: [`hiking`, `nature`, `mountains`, `scenic`]},
    {name: `Lake District`, src: `img/lake-district.jpeg`, lat: 54.4609, lon: -3.0886, tags: [`lakes`, `nature`, `scenic`, `adventure`]},
    {name: `Kinder Scout`, src: `img/kinder-scout.jpeg`, lat: 53.3848, lon: -1.8704, tags: [`hiking`, `adventure`, `nature`, `mountains`]},
    {name: `Mam Tor`, src: `img/mam-tor.jpeg`, lat: 53.3498, lon: -1.7745, tags: [`mountains`, `hiking`, `scenic`, `nature`]},
    {name: `Formby Beach`, src: `img/formby-beach.jpeg`, lat: 53.5534, lon: -3.0686, tags: [`beach`, `coastal`, `nature`, `family`]},
    {name: `Alderley Edge`, src: `img/alderley-edge.jpeg`, lat: 53.3030, lon: -2.2360, tags: [`forest`, `hiking`, `scenic`, `nature`]},
    {name: `Llandudno`, src: `img/llandudno.jpeg`, lat: 53.324238, lon: -3.827588, tags: [`coastal`, `scenic`, `nature`, `family`]},
    {name: `Great Orme`, src: `img/great-orme.jpeg`, lat: 53.3286, lon: -3.8536, tags: [`hiking`, `nature`, `scenic`, `adventure`]},
    {name: `St Tudno's Church`, src: `img/st-tudnos-church.jpeg`, lat: 53.3286, lon: -3.8536, tags: [`historic`, `architecture`, `scenic`, `culture`]},
    {name: `North Wales`, src: `img/north-wales.jpeg`, lat: 53.324238, lon: -3.827588, tags: [`nature`, `scenic`, `adventure`, `family`]},
    {name: `Dovestone Reservoir`, src: `img/dovestone-reservoir.jpeg`, lat: 53.5333, lon: -1.9833, tags: [`lakes`, `hiking`, `nature`, `scenic`]},
    {name: `Rivington Pike`, src: `img/rivington-pike.jpeg`, lat: 53.6214, lon: -2.5706, tags: [`hiking`, `scenic`, `adventure`, `nature`]},
    {name: `Tatton Park`, src: `img/tatton-park.jpeg`, lat: 53.3308, lon: -2.3876, tags: [`park`, `nature`, `family`, `historic`]},
    {name: `Delamere Forest`, src: `img/delamere-forest.jpeg`, lat: 53.2280, lon: -2.6930, tags: [`forest`, `hiking`, `nature`, `adventure`]},
];

const postcode = [
    {name: `Manchester`, lat: 53.483959, lon: -2.244644}, 
    {name: `Liverpool`, lat: 53.408371, lon: -2.991573},
    {name: `Chester`, lat: 53.190887, lon: -2.891305},
]

let galleryCollection = [];
let tagsFilter = [];

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
                    'data-lon': des.lon
                }).append(
                    $('<img>', {
                        src: des.src,
                        alt: des.name
                    }),
                    $('<a>', {
                        class: 'info',
                        href: googleMap,
                        target: '_blank'
                    }).append(
                        $('<h4>').text(des.name),
                        $('<span>', { class: 'material-symbols-outlined weather' }).text('near_me')
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
                $(`.pills`).append(`<button class="pill" id="${tag}" onclick="filterByTag(event)">${tag}</button>`);
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