
function setLocation(lat, lng)
{
    open("https://www.google.com/maps/place/" + lat + "," + lng);
}

function getLocation() {
   navigator.geolocation.getCurrentPosition(position => {
    open("https://www.google.com/maps/place/" + position.coords.latitude + "," + position.coords.longitude);
   });
    // navigator.geolocation.getCurrentPosition(googleMap);
}

// function googleMap(position) {
//     open("https://www.google.com/maps/place/" + position.coords.latitude + "," + position.coords.longitude);
// }


