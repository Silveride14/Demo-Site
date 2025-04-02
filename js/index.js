const nature = [
    {
        name: `Peak District`,
        title: `Explore the Rolling Hills of the Peak District`,
        src: `img/peak-district.jpeg`,
        lat: 53.3430,
        lon: -1.7722,
        tags: [`hiking`, `nature`, `mountains`, `scenic`],
        location: `Derbyshire, England`,
        description: `The Peak District is England's first national park, offering a mix of stunning landscapes, charming villages, and outdoor adventures. Known for its rolling hills, limestone dales, and gritstone ridges, it’s a haven for hikers, cyclists, and nature lovers. Whether you're exploring the famous Mam Tor or wandering through picturesque villages like Castleton, the Peak District provides a perfect escape from city life.`
    },
    {
        name: `Lake District`,
        title: `Discover the Beauty of the Lake District`,
        src: `img/lake-district.jpeg`,
        lat: 54.4609,
        lon: -3.0886,
        tags: [`lakes`, `nature`, `scenic`, `adventure`],
        location: `Cumbria, England`,
        description: `The Lake District is a UNESCO World Heritage Site and one of the most picturesque regions in England. With its serene lakes, rugged mountains, and quaint villages, it’s a paradise for outdoor enthusiasts. Popular spots include Windermere, England's largest lake, and Scafell Pike, the highest peak in the country. The area also inspired the works of poets like William Wordsworth.`
    },
    {
        name: `Kinder Scout`,
        title: `Conquer the Heights of Kinder Scout`,
        src: `img/kinder-scout.jpeg`,
        lat: 53.3848,
        lon: -1.8704,
        tags: [`hiking`, `adventure`, `nature`, `mountains`],
        location: `Peak District, England`,
        description: `Kinder Scout is the highest point in the Peak District and a favorite among seasoned hikers. This moorland plateau offers challenging trails, breathtaking views, and a sense of adventure. It’s also historically significant as the site of the 1932 Mass Trespass, which paved the way for public access to the countryside.`
    },
    {
        name: `Mam Tor`,
        title: `Hike the Iconic Mam Tor`,
        src: `img/mam-tor.jpeg`,
        lat: 53.3498,
        lon: -1.7745,
        tags: [`mountains`, `hiking`, `scenic`, `nature`],
        location: `Peak District, England`,
        description: `Known as the "Shivering Mountain," Mam Tor is one of the most popular hiking destinations in the Peak District. The summit offers panoramic views of the surrounding valleys and ridges, making it a favorite spot for photographers and nature enthusiasts. The nearby Great Ridge walk is a must for anyone visiting the area.`
    },
    {
        name: `Formby Beach`,
        title: `Relax at the Scenic Formby Beach`,
        src: `img/formby-beach.jpeg`,
        lat: 53.5534,
        lon: -3.0686,
        tags: [`beach`, `coastal`, `nature`, `family`],
        location: `Merseyside, England`,
        description: `Formby Beach is a stunning coastal destination known for its expansive sandy dunes, pine forests, and wildlife. It’s a great spot for a family day out, with opportunities to spot red squirrels in the nearby woods or enjoy a peaceful walk along the shoreline. The beach is also a popular location for picnics and kite flying.`
    },
    {
        name: `Alderley Edge`,
        title: `Uncover the Mysteries of Alderley Edge`,
        src: `img/alderley-edge.jpeg`,
        lat: 53.3030,
        lon: -2.2360,
        tags: [`forest`, `hiking`, `scenic`, `nature`],
        location: `Cheshire, England`,
        description: `Alderley Edge is a wooded sandstone ridge steeped in myths and legends. It offers scenic walking trails with breathtaking views of the Cheshire Plain. The area is also known for its connection to folklore, including tales of wizards and hidden treasures. It’s a perfect destination for those seeking both natural beauty and a touch of mystery.`
    },
    {
        name: `Llandudno`,
        title: `Experience the Charm of Llandudno`,
        src: `img/llandudno.jpeg`,
        lat: 53.324238,
        lon: -3.827588,
        tags: [`coastal`, `scenic`, `nature`, `family`],
        location: `North Wales`,
        description: `Llandudno is a picturesque seaside town often referred to as the "Queen of the Welsh Resorts." With its Victorian pier, sandy beaches, and the Great Orme headland, it’s a perfect destination for families and couples. The town also offers a cable car ride and a tramway to the summit of the Great Orme, providing stunning views of the coastline.`
    },
    {
        name: `Great Orme`,
        title: `Explore the Majestic Great Orme`,
        src: `img/great-orme.jpeg`,
        lat: 53.3286,
        lon: -3.8536,
        tags: [`hiking`, `nature`, `scenic`, `adventure`],
        location: `North Wales`,
        description: `The Great Orme is a limestone headland offering a mix of natural beauty and adventure. Visitors can enjoy hiking trails, a cable car ride, and even a visit to the Bronze Age copper mines. The area is also home to diverse wildlife, including rare plants and seabirds.`
    },
    {
        name: `St Tudno's Church`,
        title: `Visit the Historic St Tudno's Church`,
        src: `img/st-tudnos-church.jpeg`,
        lat: 53.3286,
        lon: -3.8536,
        tags: [`historic`, `architecture`, `scenic`, `culture`],
        location: `Great Orme, North Wales`,
        description: `St Tudno's Church is a historic site located on the slopes of the Great Orme. This peaceful church offers stunning views of the surrounding landscape and a glimpse into the region's rich history. It’s a must-visit for those interested in architecture and culture.`
    },
    {
        name: `North Wales`,
        title: `Discover the Wonders of North Wales`,
        src: `img/north-wales.jpeg`,
        lat: 53.324238,
        lon: -3.827588,
        tags: [`nature`, `scenic`, `adventure`, `family`],
        location: `North Wales`,
        description: `North Wales is a region of outstanding natural beauty, offering a mix of mountains, beaches, and historic castles. Popular attractions include Snowdonia National Park, Conwy Castle, and the Isle of Anglesey. It’s a perfect destination for adventure seekers and history enthusiasts alike.`
    },
    {
        name: `Dovestone Reservoir`,
        title: `Relax at Dovestone Reservoir`,
        src: `img/dovestone-reservoir.jpeg`,
        lat: 53.5333,
        lon: -1.9833,
        tags: [`lakes`, `hiking`, `nature`, `scenic`],
        location: `Greater Manchester, England`,
        description: `Dovestone Reservoir is a tranquil spot surrounded by moorland and hills. It’s a popular destination for walking, birdwatching, and picnicking. The area offers several trails, including a circular route around the reservoir, making it ideal for families and casual hikers.`
    },
    {
        name: `Rivington Pike`,
        title: `Hike to the Summit of Rivington Pike`,
        src: `img/rivington-pike.jpeg`,
        lat: 53.6214,
        lon: -2.5706,
        tags: [`hiking`, `scenic`, `adventure`, `nature`],
        location: `Lancashire, England`,
        description: `Rivington Pike is a historic hilltop landmark offering panoramic views of the surrounding countryside. The area is popular for hiking, mountain biking, and exploring nearby attractions like Rivington Terraced Gardens. It’s a great destination for outdoor enthusiasts.`
    },
    {
        name: `Tatton Park`,
        title: `Explore the Historic Tatton Park`,
        src: `img/tatton-park.jpeg`,
        lat: 53.3308,
        lon: -2.3876,
        tags: [`park`, `nature`, `family`, `historic`],
        location: `Cheshire, England`,
        description: `Tatton Park is a historic estate featuring a grand mansion, beautifully landscaped gardens, and a deer park. It’s a perfect destination for families, offering a mix of history, nature, and outdoor activities. The estate also hosts various events throughout the year, including food festivals and outdoor concerts.`
    },
    {
        name: `Delamere Forest`,
        title: `Reconnect with Nature at Delamere Forest`,
        src: `img/delamere-forest.jpeg`,
        lat: 53.2280,
        lon: -2.6930,
        tags: [`forest`, `hiking`, `nature`, `adventure`],
        location: `Cheshire, England`,
        description: `Delamere Forest is a vast woodland area offering a peaceful escape from urban life. Visitors can enjoy walking trails, cycling routes, and even a treetop adventure course. The forest is also home to diverse wildlife, making it a great spot for nature enthusiasts.`
    }
];

const postcode = [
    {name: `Manchester`, lat: 53.483959, lon: -2.244644}, 
    {name: `Liverpool`, lat: 53.408371, lon: -2.991573},
    {name: `Chester`, lat: 53.190887, lon: -2.891305},
]

//import the nature data
// import { postcode, nature } from './data.js';

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
                    'data-lon': des.lon,
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

// Attach a single event listener to the parent container
$('#destinationGallery').on('click', '.galleryImg', function (e) {
    showDestination(e);
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
        <div class="weather-info">
            <span>${card.data('temp')}°C</span>
            <span class="material-symbols-outlined weather">rainy</span>${card.data('rain')}mm
        </div>
        <a href="https://www.google.com/maps/search/?api=1&query=${des.name}" target="_blank" class="locationHref">
            <h2>${des.location}</h2><span class="material-symbols-outlined weather">near_me</span>
        </a>
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