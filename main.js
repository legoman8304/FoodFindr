function getWeather(a){
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/' + 'json' + '?' + config.MY_KEY + '&' + ''
  const requestURL = proxyUrl + targetUrl
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    const req = request
    console.log(req)
    document.getElementById("current").innerHTML = req.response.currently.apparentTemperature
  }
}