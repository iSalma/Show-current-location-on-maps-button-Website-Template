
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


function returnLocation() {
    // setTimeout(function () {
        navigator.geolocation.getCurrentPosition(position => {
            var lat, lng, mapLink, timeZone;

            lat = position.coords.latitude;
            lng = position.coords.longitude;
            mapLink = "https://www.google.com/maps/place/" + position.coords.latitude + "," + position.coords.longitude;
            timeZone = new Date().getTimezoneOffset() / 60;

            document.getElementById("text1").value = "Latitude: " + lat;
            document.getElementById("text2").value = "Longitude: " + lng;
            document.getElementById("text3").value = "Link: " + mapLink;
            document.getElementById("text4").value = "Time Zone: " + timeZone;
        });
//    }, 2);
}
