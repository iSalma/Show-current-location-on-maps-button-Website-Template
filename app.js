
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




function getLocationData() {
    navigator.geolocation.getCurrentPosition(position => {
        var lat, lng, mapLink, timeZone;

        lat = position.coords.latitude;
        lng = position.coords.longitude;
        mapLink = "https://www.google.com/maps/place/" + position.coords.latitude + "," + position.coords.longitude;
        timeZone = new Date().getTimezoneOffset() / -60;

        document.getElementById("lat").value = lat;
        document.getElementById("lng").value = lng;
        document.getElementById("mapLink").value = mapLink;
        document.getElementById("timeZone").value = timeZone;
    });
}

/**longitude/15 is the time zone  bs lw neg msh 3yza floor 3yza ceil*/
//alert(Math.floor(30.564654/15))
