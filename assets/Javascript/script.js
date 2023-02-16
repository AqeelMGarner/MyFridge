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

document.getElementById("searchBtn").addEventListener("click", function (e) {
    e.preventDefault();
    var query = document.getElementById('placeholderText').value;


    $.ajax({
        method: 'GET',
        url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
        headers: { 'X-Api-Key': 'p659xQvXDLI/IO+zraCpng==I1MzyWAxQGwYt7w6' },
        contentType: 'application/json',
        success: function (result) {

            const carb = result.items[0].carbohydrates_total_g;
            const fat = result.items[0].fat_total_g;
            const calories = result.items[0].calories;
            const protein = result.items[0].protein_g;
            console.log(result);

            var ingredientInfo = document.getElementById('nutrition');
            var infoText = document.createElement('h6');
            infoText.classList.add('infoText');
            infoText.textContent = 'Total Carbs: ' + carb + 'g, Total Fat: ' + fat + 'g, Total Calories: ' + calories + ', Total Protein: ' + protein + 'g';
            ingredientInfo.appendChild(infoText);


        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });




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

        var carbsOne = response.hits[0].recipe.totalNutrients.CHOCDF.quantity;
        var proteinOne = response.hits[0].recipe.totalNutrients.PROCNT.quantity;
        var fatOne = response.hits[0].recipe.totalNutrients.FAT.quantity;
        var caloriesOne = response.hits[0].recipe.calories;

        var carbsTwo = response.hits[1].recipe.totalNutrients.CHOCDF.quantity;
        var proteinTwo = response.hits[1].recipe.totalNutrients.PROCNT.quantity;
        var fatTwo = response.hits[1].recipe.totalNutrients.FAT.quantity;
        var caloriesTwo = response.hits[1].recipe.calories;

        var carbsThree = response.hits[2].recipe.totalNutrients.CHOCDF.quantity;
        var proteinThree = response.hits[2].recipe.totalNutrients.PROCNT.quantity;
        var fatThree = response.hits[2].recipe.totalNutrients.FAT.quantity;
        var caloriesThree = response.hits[2].recipe.calories;

        const ingredientList = response.hits[0].recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`);
        const ingredientListTwo = response.hits[1].recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`);
        const ingredientListThree = response.hits[2].recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`);


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

        const cardBackOne = document.getElementById('cardBackOne');
        cardBackOne.innerHTML = `
        <h2 id="ingredientOne">Ingredients<button class="btn saveBtn">
        <i class="fa fa-save"></i></button></h2>
              <ul>${ingredientList.join('')}</ul>
            `;

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

        const cardBackTwo = document.getElementById('cardBackTwo');
        cardBackTwo.innerHTML = `
        <h2 id="ingredientTwo">Ingredients<button class="btn saveBtn">
        <i class="fa fa-save"></i></button></h2>
        <ul>${ingredientListTwo.join('')}</ul>
      `;

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

        const cardBackThree = document.getElementById('cardBackThree');
        cardBackThree.innerHTML = `
      <h2 id="ingredientThree">Ingredients<button class="btn saveBtn">
      <i class="fa fa-save"></i></button></h2>
      <ul>${ingredientListThree.join('')}</ul>
      `;

        let hitsArray = [firstHit, secondHit, thirdHit]


        const saveBtns = document.querySelectorAll('.saveBtn');
        saveBtns.forEach((btn, index) => { // Add the index parameter to the function
            btn.addEventListener('click', () => {
                const history = document.getElementById('history');
                const btnEl = document.createElement('button');
                btnEl.classList.add('list-group-item');
                btnEl.setAttribute('data-toggle', 'modal');
                btnEl.setAttribute('data-target', '#modal');
                btnEl.textContent = hitsArray[index];
                history.appendChild(btnEl);
                btnEl.addEventListener('click', () => {
                    $("#modal").modal('show');
                });

                const recipeData = {
                    recipeTitle: hitsArray[index],

                };

                // Retrieve the saved recipe data from local storage and add the new recipe data to it
                const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
                savedRecipes.push(recipeData);

                // Save the updated recipe data to local storage
                localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
            });
        });



    })
});


window.addEventListener('load', () => {
    const history = document.getElementById('history');

    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

    savedRecipes.forEach(recipeData => {
        const btnEl = document.createElement('button');
        btnEl.classList.add('list-group-item');
        btnEl.textContent = recipeData.recipeTitle;
        btnEl.setAttribute('data-toggle', 'modal');
        btnEl.setAttribute('data-target', '#modal');
        history.appendChild(btnEl);
        btnEl.addEventListener('click', () => {
            $("#modal").modal('show');
        });
    });
});


const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear recipes';
clearBtn.classList.add('list-group-item')
clearBtn.setAttribute('id', 'clearbtn');
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    const history = document.getElementById('history');
    history.innerHTML = '';
    history.appendChild(clearBtn);
});

const history = document.getElementById('history');
history.appendChild(clearBtn);






