/* 
Old method of fetching api, switched to jquery. Keeping here until development is done just in case

function a(a){
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/', //Anti cors proxy to eliminate cors errors on api calls.
        targetUrl = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/' + 'json' + '?' + MY_KEY + '&' + 'food' + '&' + 'textquery' 
  const requestURL = proxyUrl + targetUrl
  const request = new XMLHttpRequest();
  request.open('GET', targetUrl);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    const req = request
    console.log(req)
    document.getElementById("log").innerHTML = req;
  }
}
a();
*/ 
console.debug("start");
$.ajax({
  dataType: "json",
  url: "https://api.foursquare.com/v2/venues/search?client_id="+CLIENT_ID+"&client_secret="+CLIENT_SECRET+"&v=20180323&near=Parkersburg,WV&radius=100000&categoryId=4d4b7105d754a06374d81259",
  data: {},
  success: function( data ) {
    console.debug("success")
    console.log(data);
    console.debug("used - https://api.foursquare.com/v2/venues/search?client_id="+CLIENT_ID+"&client_secret="+CLIENT_SECRET+"&v=20180323&near=Parkersburg,WV&radius=100000&categoryId=4d4b7105d754a06374d81259")
    var places = [data.response.venues[0].name, data.response.venues[1].name, data.response.venues[2].name, data.response.venues[3].name, data.response.venues[4].name, data.response.venues[5].name, data.response.venues[6].name, data.response.venues[7].name, data.response.venues[8].name, data.response.venues[9].name, data.response.venues[10].name, data.response.venues[11].name, data.response.venues[12].name, data.response.venues[13].name, data.response.venues[14].name, data.response.venues[15].name, data.response.venues[16].name, data.response.venues[17].name, data.response.venues[18].name, data.response.venues[19].name, data.response.venues[20].name, data.response.venues[21].name, data.response.venues[22].name, data.response.venues[23].name, data.response.venues[24].name, data.response.venues[25].name, data.response.venues[26].name, data.response.venues[27].name, data.response.venues[28].name, data.response.venues[29].name, ];
    var uniquePlaces = [];
    for (let index = 0; index < places.length; index++) {
      $.each(places, function(i, el){
        if($.inArray(el, uniquePlaces) === -1) uniquePlaces.push(el);
        })
    }
    console.log(places);
    console.log(uniquePlaces);
    for (let index = 0; index < uniquePlaces.length; index++) {
      document.getElementById(index).innerHTML = uniquePlaces[index]
    }
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.debug(jqXHR);
    console.debug(textStatus);
    console.debug(errorThrown);
  }
});
console.debug("end")
