
function setLocation(lat, lng)
{
    open("https://www.google.com/maps/place/" + lat + "," + lng);
}


function getLocation() {
   // navigator.geolocation.getCurrentPosition(googleMap);
   navigator.geolocation.getCurrentPosition(position => {
    open("https://www.google.com/maps/place/" + position.coords.latitude + "," + position.coords.longitude);
   });
}

// function googleMap(position) {
//     open("https://www.google.com/maps/place/" + position.coords.latitude + "," + position.coords.longitude);
// }

//mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRndWFuIiwiYSI6ImNpcG50N2s4NDAwNGRmbG5jeXZtMHkxMW4ifQ.ubiXybBxhpidF83H-Zvz7Q';

// var map = new mapboxgl.Map({
//     container: 'map',
//     center: [0, 0],
//     zoom: 13,
//     style: 'mapbox://styles/mapbox/streets-v9',
//     // hash: true,
//     // transformRequest: (url, resourceType)=> {
//     //   if(resourceType === 'Source' && url.startsWith('http://myHost')) {
//     //     return {
//     //      url: url.replace('http', 'https'),
//     //      headers: { 'my-custom-header': true},
//     //      credentials: 'include'  // Include cookies for cross-origin requests
//     //    }
//     //   }
//   //  }
//   });

//      map.addControl(new mapboxgl.GeolocateControl({
//     positionOptions: {
//         enableHighAccuracy: true
//     },
//     trackUserLocation: true
// }));

// mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRndWFuIiwiYSI6ImNpcG50N2s4NDAwNGRmbG5jeXZtMHkxMW4ifQ.ubiXybBxhpidF83H-Zvz7Q';

// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(position => {
//         var map = new mapboxgl.Map({
//             container: 'map',
//             style: 'mapbox://styles/mapbox/streets-v9',
//             center: [position.coords.longitude, position.coords.latitude],
//             zoom: 10
//         });
//         map.addControl(new mapboxgl.GeolocateControl({
//             positionOptions: {
//                 enableHighAccuracy: true
//             },
//             trackUserLocation: true,
//             showUserLocation: true
//         }));
//     });
// } else { /* geolocation IS NOT available, handle it */

// }
// map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     center: [0, 0],
//     zoom: 2
// });

// map.addControl(new mapboxgl.GeolocateControl({
//     positionOptions: {
//         enableHighAccuracy: true
//     },
//     trackUserLocation: true,
//     showUserLocation: true
// }));



// var geoloc = new  mapboxgl.GeolocateControl({
//     trackUserLocation: true,
//});

