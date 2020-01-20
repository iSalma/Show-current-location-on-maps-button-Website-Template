
function setLocation(lat, lng)
{
    open("https://www.google.com/maps/place/" + lat + "," + lng);
}

function getLocation() {
    // navigator.geolocation.getCurrentPosition(googleMap);
    setTimeout(function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                open("https://www.google.com/maps/place/" + position.coords.latitude + "," + position.coords.longitude);
            });
        }
        else {
            var n = document.getElementById("notValid");
            n.innerHTML = "not valid";
        }
    }, 1000);
}

// function googleMap(position) {
//     open("https://www.google.com/maps/place/" + position.coords.latitude + "," + position.coords.longitude);
// }


