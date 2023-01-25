function locationFill() {
  navigator.geolocation.getCurrentPosition(function (location) {
    var lat = location.coords.latitude;
    var lng = location.coords.longitude;
    console.debug("Location permission granted");
    console.debug(lat + ", " + lng);
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://api.foursquare.com/v3/places/search?ll=" + lat + "," + lng + "&radius=16093&categories=13000&open_now=true&limit=32",
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: API_KEY
      }
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      console.debug("used - " + settings.url)
      var places = [response.results[0].name, response.results[1].name, response.results[2].name, response.results[3].name, response.results[4].name, response.results[5].name, response.results[6].name, response.results[7].name, response.results[8].name, response.results[9].name, response.results[10].name, response.results[11].name, response.results[12].name, response.results[13].name, response.results[14].name, response.results[15].name, response.results[16].name, response.results[17].name, response.results[18].name, response.results[19].name, response.results[20].name, response.results[21].name, response.results[22].name, response.results[23].name, response.results[24].name, response.results[25].name, response.results[26].name, response.results[27].name, response.results[28].name, response.results[29].name,];
      var uniquePlaces = [];
      for (let index = 0; index < places.length; index++) {
        $.each(places, function (i, el) {
          if ($.inArray(el, uniquePlaces) === -1) uniquePlaces.push(el);
        })
      }
      console.debug(places);
      console.debug(uniquePlaces);
      for (let index = 0; index < uniquePlaces.length; index++) {
        document.getElementById(index).innerHTML = uniquePlaces[index]
      }
    });
    const locationFillButton = document.getElementById("locationFillButton")
    locationFillButton.remove()
  },
    function (error) {
      console.error("Location permission denied");
    });
}