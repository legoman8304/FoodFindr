/* function a(a){
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

Old method of fetching api, switched to jquery.

*/ 

console.debug("start");
$.ajax({
  dataType: "json",
  url: "https://api.foursquare.com/v2/venues/search?client_id="+CLIENT_ID+"&client_secret="+CLIENT_SECRET+"&v=20180323&near=Parkersburg,WV&radius=100000",
  data: {},
  success: function( data ) {
    console.debug("success")
    console.log(data);
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.debug(jqXHR);
    console.debug(textStatus);
    console.debug(errorThrown);
  }
});
console.debug("end")
