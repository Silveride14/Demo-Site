const nature = [
    {name: `Peak District`, src: `img/Img-1.jpeg`, lat: 53.3430, lon: -1.7722},
    {name: `Lake District`, src: `img/Img-2.jpeg`, lat: 54.4609, lon: -3.0886},
    {name: `Kinder Scout`, src: `img/Img-3.jpeg`, lat: 53.3848, lon: -1.8704},
    {name: `Mam Tor`, src: `img/Img-4.jpeg`, lat: 53.3498, lon: -1.7745},
    {name: `Formby Beach`, src: `img/Img-9.jpeg`, lat: 53.5534, lon: -3.0686},
    {name: `Alderley Edge`, src: `img/Img-10.jpeg`, lat: 53.3030, lon: -2.2360},
    {name: `Llandudno`, src: `img/IMG_9154.jpeg`, lat: 53.324238, lon: -3.827588},
    {name: `Great Orme`, src: `img/IMG_9132.jpeg`, lat: 53.3286, lon: -3.8536},
    {name: `St Tudno's Church`, src: `img/IMG_9149.jpeg`, lat: 53.3286, lon: -3.8536},
    {name: `North Wales`, src: `img/IMG_9123.jpeg`, lat: 53.324238, lon: -3.827588},
    {name: `Dovestone Reservoir`, src: `img/Img-5.jpeg`, lat: 53.5333, lon: -1.9833},
    {name: `Rivington Pike`, src: `img/Img-6.jpeg`, lat: 53.6214, lon: -2.5706},
    {name: `Tatton Park`, src: `img/Img-7.jpeg`, lat: 53.3308, lon: -2.3876},
    {name: `Delamere Forest`, src: `img/Img-8.jpeg`, lat: 53.2280, lon: -2.6930},
];

const postcode = [
    {
        name: `Manchester`,
        lat: 53.483959,
        lon: -2.244644
    }, 
    {
        name: `Liverpool`,
        lat: 53.408371,
        lon: -2.991573
    },
    {
        name: `Chester`,
        lat: 53.190887,
        lon: -2.891305
    },
]

let galleryCollection = [];

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
                    $('<div>', { class: 'info' }).append(
                        $('<a>', {
                            href: googleMap,
                            target: '_blank'
                        }).append(
                            $('<h4>').text(des.name),
                            $('<span>', { class: 'material-symbols-outlined weather' }).text('near_me')
                        ),
                        $('<span>', { class: 'rain' }).append(
                            $('<span>', { class: 'material-symbols-outlined weather' }).text('rainy'),
                            $('<span>').text(`${result.current.rain}mm`)
                        ),
                        $('<span>').text(`${des.distance} miles`),
                        $('<span>', { class: 'temp' }).text(`${result.current.temperature_2m}°C`)
                    )
                );
                galleryCollection.push(galleryCard);
                //initalise the gallery
                sortGalleryByDistance();
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
            //initalise the gallery
            sortGalleryByDistance();
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
})

function sortGalleryByDistance(){
    let selectedLocation = $(`#from option:selected`).val();
    let loc = postcode.find((loc) => loc.name === selectedLocation);
    //change the data-distance for each galleryCollection
    galleryCollection.forEach((card) => {
        card[0].setAttribute(`data-distance`, haversineDistance(loc.lat, loc.lon, card[0].getAttribute('data-lat'), card[0].getAttribute('data-lon')));
    });
    //sort the galleryCollection by distance
    galleryCollection.sort((a, b) => a[0].getAttribute(`data-distance`) - b[0].getAttribute(`data-distance`));
    
    //reinitialise the gallery
    initialiseGallery();
}