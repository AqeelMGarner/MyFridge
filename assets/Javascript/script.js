

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://edamam-recipe-search.p.rapidapi.com/search?q=chicken",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "14b0003685mshe3ead7338141716p16fb2cjsnaa89ee428e3f",
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);


});



var query = 'courgettes'
$.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'p659xQvXDLI/IO+zraCpng==I1MzyWAxQGwYt7w6' },
    contentType: 'application/json',
    success: function (result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
})



/*     for (var i = 0; i <= 3; i ++) {
var reciepe = moment.unix(forecastData.list[i].dt).format("DD/MM/YYYY");
var temp = (forecastData.list[i].main.temp - 273.15).toFixed(1);
var wind = forecastData.list[i].wind.speed;
var humidity = forecastData.list[i].main.humidity;
var icon = forecastData.list[i].weather[0].icon;
*/
/*/
    .append($("<h5>").addClass("date").text(recipe))
    .append($("<img>").addClass("icon").attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png"))
    .append($("<h6>").addClass("h6").text("Temp: " + temp + "°C"))
    .append($("<h6>").addClass("h6").text("Wind: " + wind + "KPH"))
    .append($("<h6>").addClass("h6").text("Humidity: " + humidity + "%"))
    .appendTo(card);
*/

var colours = ['pink', 'blue', 'yellow', 'red', 'green', 'cyan', 'orange', 'magenta', 'purple', 'brown'];

function randomColour() {
    return colours[Math.floor(Math.random() * colours.length)];
}

var header = document.getElementById("header");
var title = header.innerHTML;
var colouredTitle = "";

for (var i = 0; i < title.length; i++) {
    var colour = randomColour();
    colouredTitle += "<span style='color: " + colour + ";'>" + title[i] + "</span>";
}

header.innerHTML = colouredTitle;
