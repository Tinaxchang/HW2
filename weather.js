//


// let getWeather = function(location) {
//   let latitude = '41.8781';
//   let longitude = '-87.6298';
//   let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
//   openweathermap_api_url += 'lat=' + latitude
//   openweathermap_api_url += '&lon=' + longitude
//   openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
//
//   fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
// }
//
// let displayError = function(error) {
//   console.debug(error);
//   window.alert("Sorry, something went wrong.");
// }
//
// // HINT:
// // Weather icon example: http://openweathermap.org/img/w/10d.png
// // The very last part ('10d.png') can change based on the current conditions.
//
// let handlePosition = function(info) {
//   console.info(info)
//   let div = document.getElementById("image");
//   let url = "http://openweathermap.org/img/w/"+ weatherIcon.weather.icon+".png"
//   div.innerHTML = "<img src=\"" + url + "\">";
// };

// var getWeather = function(zipcode) {
//   var openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
//
// let link = document.getElementById("get_forecast")
// link.addEventListener("click", function(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(handlePosition);
// });
// //
let handlePosition = function(info) {
  console.info(info)
}

let getWeather = function(info) {
  let latitude = info.coords.latitude.toFixed(4);
  let longitude = info.coords.longitude.toFixed(4);
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
  console.debug("Latitude: " + latitude+", Longitude: "+longitude);

  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}

let link = document.getElementById("get_forecast")
link.addEventListener("click", function(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather)
})

let convertToJSON = function(response) {
  return response.json();
}

let updateWeather = function(dataFromService) {
  city = dataFromService.name;
  temp = dataFromService.main.temp;
  icon = dataFromService.weather[0].icon;
  document.querySelector('.card-title').innerHTML = city;
  document.querySelector('.card-text').innerHTML = "It is " + temp + " degrees outside.";
  document.querySelector('.card-img-top').src = "http://openweathermap.org/img/w/" + icon + ".png";
}

let displayError = function(error) {
  // console.debug(error);
  window.alert("Oops! Please try again!");
}
