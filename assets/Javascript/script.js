
document.getElementById("searchBtn").addEventListener("click", function (e) {
    e.preventDefault();
    var query = document.getElementById('placeholderText').value;


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

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://edamam-recipe-search.p.rapidapi.com/search?q=" + query,
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


        const ingredientList = response.hits[0].recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`);
        const ingredientListTwo = response.hits[1].recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`);
        const ingredientListThree = response.hits[2].recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`);

        const cardBackOne = document.getElementById('cardBackOne');
        const ingredientOne = document.getElementById('ingredientOne');
        ingredientOne.classList.add('ingredients');

        cardBackOne.innerHTML = `
        <h2 id="ingredientOne">Ingredients</h2>
        <ul>${ingredientList.join('')}</ul>
      `;

        const cardBackTwo = document.getElementById('cardBackTwo');
        const ingredientTwo = document.getElementById('ingredientTwo');
        ingredientTwo.classList.add('ingredients');

        cardBackTwo.innerHTML = `
        <h2 id="ingredientTwo">Ingredients</h2>
        <ul>${ingredientListTwo.join('')}</ul>
      `;

        const cardBackThree = document.getElementById('cardBackThree');
        const ingredientThree = document.getElementById('ingredientThree');
        ingredientThree.classList.add('ingredients');

        cardBackThree.innerHTML = `
        <h2 id="ingredientThree">Ingredients</h2>
        <ul>${ingredientListThree.join('')}</ul>
      `;


        const cardOne = document.getElementById('cardOne');
        const recipeOne = document.getElementById('recipeOne');
        recipeOne.classList.add('recipeTitle');
        recipeOne.textContent = firstHit;
        const img = document.createElement("img");
        img.classList.add("imageRecipe");
        img.setAttribute("src", imageOne);
        cardOne.appendChild(img);
        var existingImgOne = cardOne.querySelector('img');

        if (existingImgOne) {
            cardOne.removeChild(existingImgOne);
        }

        cardOne.appendChild(img);

        const cardTwo = document.getElementById('cardTwo')
        const recipeTwo = document.getElementById('recipeTwo');
        recipeTwo.classList.add('recipeTitle');
        recipeTwo.textContent = secondHit;
        const imgTwo = document.createElement("img");
        imgTwo.classList.add("imageRecipe");
        imgTwo.setAttribute("src", imageTwo);
        cardTwo.appendChild(imgTwo);
        var existingImgTwo = cardTwo.querySelector('img');

        if (existingImgTwo) {
            cardTwo.removeChild(existingImgTwo);
        }

        cardTwo.appendChild(imgTwo);

        const cardThree = document.getElementById('cardThree')
        const recipeThree = document.getElementById('recipeThree');
        recipeThree.classList.add('recipeTitle');
        recipeThree.textContent = thirdHit;
        const imgThree = document.createElement("img");
        imgThree.classList.add("imageRecipe");
        imgThree.setAttribute("src", imageThree);
        cardThree.appendChild(imgThree);
        var existingImgThree = cardThree.querySelector('img');

        if (existingImgThree) {
            cardThree.removeChild(existingImgThree);
        }

        cardThree.appendChild(imgThree);


    });

});

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