function locationFill() {
  navigator.geolocation.getCurrentPosition(function (location) {
    var lat = location.coords.latitude;
    var lng = location.coords.longitude;
    console.debug("Location permission granted");
    console.debug(lat + ", " + lng);
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://api.foursquare.com/v3/places/search?ll=" + lat + "," + lng + "&radius=16093&categories=13000&open_now=true&limit=40",
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: API_KEY
      }
    };

    $.ajax(settings).done(function (response) {
      console.debug(response);
      console.debug("used - " + settings.url)
      var places = [];
      for (let i = 0; i < response.results.length; i++) {
        places.push(response.results[i].name)
      }
      var uniquePlaces = [];
      for (let index = 0; index < places.length; index++) {
        $.each(places, function (i, el) {
          if ($.inArray(el, uniquePlaces) === -1 && places[i].length <= 30) uniquePlaces.push(el);
        })
      }
      console.debug(places);
      console.debug(uniquePlaces);

      if (uniquePlaces.length < 31) {
        console.error("Not enough unique venues returned. Only recieved " + uniquePlaces.length + " of 31 needed results")
      }

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
function passWinnerToNextElement(winnerID) {
  if (winnerID == 0 || winnerID == 1) {
    console.debug("between 0 and 1")
    document.getElementById("A0").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 2 || winnerID == 3) {
    console.debug("between 2 and 3")
    document.getElementById("A1").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 4 || winnerID == 5) {
    console.debug("between 4 and 5")
    document.getElementById("A2").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 6 || winnerID == 7) {
    console.debug("between 6 and 7")
    document.getElementById("A3").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 8 || winnerID == 9) {
    console.debug("between 8 and 9")
    document.getElementById("A4").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 10 || winnerID == 11) {
    console.debug("between 10 and 11")
    document.getElementById("A5").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 12 || winnerID == 13) {
    console.debug("between 12 and 13")
    document.getElementById("A6").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 14 || winnerID == 15) {
    console.debug("between 14 and 15")
    document.getElementById("A7").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 16 || winnerID == 17) {
    console.debug("between 16 and 17")
    document.getElementById("A8").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 18 || winnerID == 19) {
    console.debug("between 18 and 19")
    document.getElementById("A9").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 20 || winnerID == 21) {
    console.debug("between 20 and 21")
    document.getElementById("A10").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 22 || winnerID == 23) {
    console.debug("between 22 and 23")
    document.getElementById("A11").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 24 || winnerID == 25) {
    console.debug("between 24 and 25")
    document.getElementById("A12").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 26 || winnerID == 27) {
    console.debug("between 26 and 27")
    document.getElementById("A13").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 28 || winnerID == 29) {
    console.debug("between 28 and 29")
    document.getElementById("A14").innerHTML = document.getElementById(winnerID).textContent
  } else if (winnerID == 30 || winnerID == 31) {
    console.debug("between 30 and 31")
    document.getElementById("A15").innerHTML = document.getElementById(winnerID).textContent
  } else {
    console.error("ERROR: ID of " + winnerID + " is out of range for pass")
  }
  var bothFilled = []
  if (document.getElementById("A0").innerHTML.trim().length > 0 && document.getElementById("A1").innerHTML.trim().length > 0 && document.getElementById("A2").innerHTML.trim().length > 0 && document.getElementById("A3").innerHTML.trim().length > 0 && document.getElementById("A4").innerHTML.trim().length > 0 && document.getElementById("A5").innerHTML.trim().length > 0 && document.getElementById("A6").innerHTML.trim().length > 0 && document.getElementById("A7").innerHTML.trim().length > 0) {
    bothFilled.push(1)
  }
  if (document.getElementById("A8").innerHTML.trim().length > 0 && document.getElementById("A9").innerHTML.trim().length > 0 && document.getElementById("A10").innerHTML.trim().length > 0 && document.getElementById("A11").innerHTML.trim().length > 0 && document.getElementById("A12").innerHTML.trim().length > 0 && document.getElementById("A13").innerHTML.trim().length > 0 && document.getElementById("A14").innerHTML.trim().length > 0 && document.getElementById("A15").innerHTML.trim().length > 0) {
    bothFilled.push(1)
  }
  if (bothFilled[0] == 1 && bothFilled[1] == 1){
    deleteClass("current");
    addClass("R2L", "current");
    addClass("R2R", "current");
    deleteElement("R1R");
    deleteElement("R1L");
  }
}
function deleteClass(name) {
  const element = document.getElementsByClassName(name);
  console.debug("Deleted " + element.length + " element class(es)")
  for (let i = 0; i < element.length; i + 1) {
    element[i].classList.remove(name);
  }
}
function addClass(ID, name) {
  const element = document.getElementById(ID);
  element.classList.add(name);
  console.debug("Added the class \"" + name + "\" to element with ID of \"" + ID + "\"")
}
function deleteElement(ID) {
  document.getElementById(ID).remove();
}
function test() {
  console.log("test")
}