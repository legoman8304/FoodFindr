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
$.ajax({
  url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/' + 'json' + '?' + MY_KEY + '&' + 'food' + '&' + 'textquery',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  },
  type: "GET", /* can use POST, GET, or PUT*/
  dataType: "json",
  data: {
  },
  success: function (result) {
      console.log(result);
      document.getElementById("log").innerHTML = result;
  },
  error: function () {
      console.log("error on ajax request");
  }
});