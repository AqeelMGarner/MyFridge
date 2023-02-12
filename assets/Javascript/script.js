
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://edamam-recipe-search.p.rapidapi.com/search?q=courgettes",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "14b0003685mshe3ead7338141716p16fb2cjsnaa89ee428e3f",
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
    var firstHit = response.hits[0].recipe.label;
    var secondHit = response.hits[1].recipe.label;
    var thirdHit = response.hits[2].recipe.label;

    var imageOne = response.hits[0].recipe.image;
    var imageTwo = response.hits[1].recipe.image;
    var imageThree = response.hits[2].recipe.image;

    const cardOne = document.getElementById('cardOne')
    const recipeOne = document.getElementById('recipeOne');
    recipeOne.classList.add('recipeTitle');
    recipeOne.textContent = firstHit;
    const img = document.createElement("img");
    img.classList.add("imageRecipe");
    img.setAttribute("src", imageOne);
    cardOne.appendChild(img);
    cardOne.appendChild.recipeOne;

    const cardTwo = document.getElementById('cardTwo')
    const recipeTwo = document.getElementById('recipeTwo');
    recipeTwo.classList.add('recipeTitle');
    recipeTwo.textContent = secondHit;
    const imgTwo = document.createElement("img");
    imgTwo.classList.add("imageRecipe");
    imgTwo.setAttribute("src", imageTwo);
    cardTwo.appendChild(imgTwo);
    cardTwo.appendChild.recipeTwo;

    const cardThree = document.getElementById('cardThree')
    const recipeThree = document.getElementById('recipeThree');
    recipeThree.classList.add('recipeTitle');
    recipeThree.textContent = thirdHit;
    const imgThree = document.createElement("img");
    imgThree.classList.add("imageRecipe");
    imgThree.setAttribute("src", imageThree);
    cardThree.appendChild(imgThree);
    cardThree.appendChild.recipeThree;




    console.log(firstHit);
    console.log(secondHit);
    console.log(thirdHit);

});



var query = 'courgettes'
$.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'p659xQvXDLI/IO+zraCpng==I1MzyWAxQGwYt7w6' },
    contentType: 'application/json',
    success: function (result) {
        console.log(result)

    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }


})




/*     for (var i = 0; i <= 3; i ++) {
        var reciepe = result.(forecastData.list[i].dt).format("DD/MM/YYYY");
        var temp = (forecastData.list[i].main.temp - 273.15).toFixed(1);
        var wind = forecastData.list[i].wind.speed;
        var humidity = forecastData.list[i].main.humidity;
        var icon = forecastData.list[i].weather[0].icon;

    $("<div>").addClass("card mt-0")
    .append($("<h5>").addClass("date").text(recipe))
    .append($("<img>").addClass("icon").attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png"))
    .append($("<h6>").addClass("h6").text("Temp: " + temp + "°C"))
    .append($("<h6>").addClass("h6").text("Wind: " + wind + "KPH"))
    .append($("<h6>").addClass("h6").text("Humidity: " + humidity + "%"))
    .appendTo(forecastEl);
    }
        
}; */



var colours = ['lightpink', 'cornflowerblue', 'yellow', 'red', 'lightgreen', 'orange', 'magenta', 'purple'];

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