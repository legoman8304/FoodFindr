function locationFill() {
  navigator.geolocation.getCurrentPosition(function (location) {
    var lat = location.coords.latitude;
    var lng = location.coords.longitude;
    console.debug("Location permission granted");
    console.debug(lat + ", " + lng);
    let url = "https://api.foursquare.com/v2/venues/search?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&v=20180323&ll=" + lat + "," + lng + "&radius=16093&categoryId=4d4b7105d754a06374d81259&open_now=true&limit=60"
    $.ajax({
      dataType: "json",
      url: url,
      data: {},
      success: function (data) {
        console.debug(data);
        console.debug("used - " + url)
        var places = [data.response.venues[0].name, data.response.venues[1].name, data.response.venues[2].name, data.response.venues[3].name, data.response.venues[4].name, data.response.venues[5].name, data.response.venues[6].name, data.response.venues[7].name, data.response.venues[8].name, data.response.venues[9].name, data.response.venues[10].name, data.response.venues[11].name, data.response.venues[12].name, data.response.venues[13].name, data.response.venues[14].name, data.response.venues[15].name, data.response.venues[16].name, data.response.venues[17].name, data.response.venues[18].name, data.response.venues[19].name, data.response.venues[20].name, data.response.venues[21].name, data.response.venues[22].name, data.response.venues[23].name, data.response.venues[24].name, data.response.venues[25].name, data.response.venues[26].name, data.response.venues[27].name, data.response.venues[28].name, data.response.venues[29].name,];
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
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.debug(jqXHR);
        console.debug(textStatus);
        console.debug(errorThrown);
      }
    });
    const locationFillButton = document.getElementById("locationFillButton")
    locationFillButton.remove()
  },
    function (error) {
      console.error("Location permission denied");
    });
}