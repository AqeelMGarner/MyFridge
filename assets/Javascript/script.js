//color randomizer for the letters in the title 
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

    //searching the API calorieninjas for the nutritional information of one ingredient.

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
        headers: { 'X-Api-Key': 'p659xQvXDLI/IO+zraCpng==0ES11CeaJXk7fr0G' },
        contentType: 'application/json',
        success: function (result) {
            console.log(result);


            const carb = result[0].carbohydrates_total_g;
            const fat = result[0].fat_total_g;
            const calories = result[0].calories;
            const protein = result[0].protein_g;

            var ingredientInfo = document.getElementById('nutritionFact');
            ingredientInfo.innerHTML = '';
            var infoHead = document.createElement('h6');
            infoHead.classList.add('infoHead');
            var infoText = document.createElement('p');
            infoText.classList.add('infoText');

            infoHead.textContent = query + ':';
            infoText.textContent = 'Carbs: ' + carb + 'g,    ' + 'Fat: ' + fat + 'g,     ' + 'Protein: ' + protein + 'g,    ' + 'Calories: ' + calories;

            ingredientInfo.appendChild(infoHead);
            ingredientInfo.appendChild(infoText);


        },
    });

    //searching the API Edamam using key & user input (query)


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

        var methodOne = response.hits[0].recipe.url;
        var methodTwo = response.hits[1].recipe.url;
        var methodThree = response.hits[2].recipe.url;

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

        const ingredientList = response.hits[0].recipe.ingredientLines.map(ingredient => `${ingredient}`);
        const ingredientListTwo = response.hits[1].recipe.ingredientLines.map(ingredient => `${ingredient}`);
        const ingredientListThree = response.hits[2].recipe.ingredientLines.map(ingredient => `${ingredient}`);


        const cardOne = document.getElementById('cardOne'); //targeting the ID of cardOne
        const recipeOne = document.getElementById('recipeOne'); //targeting ID of recipeOne
        recipeOne.classList.add('recipeTitle'); //adding class of recipeTitle
        recipeOne.textContent = firstHit; //adding firstHit info from API as textContentn
        const img = document.createElement("img"); //creating the image tag
        img.classList.add("imageRecipe"); //adding a class to image
        img.setAttribute("src", imageOne); //setting the Attribute as src from imageOne
        cardOne.appendChild(img); //appending the image as a child of cardOne
        var existingImgOne = cardOne.querySelector('img');//if there is an image - call it existing Image

        if (existingImgOne) {
            cardOne.removeChild(existingImgOne);
        } //What to do if there is an image - take it away

        cardOne.appendChild(img); //append new image

        const existingNutritionList = cardOne.querySelector('.nutritioninfo');
        if (existingNutritionList) {
            cardOne.removeChild(existingNutritionList);
        }

        //adding nutritionList to the bottom of the cardOne

        const nutritionListOne = document.createElement('div');
        nutritionListOne.classList.add('nutritioninfo');
        cardOne.appendChild(nutritionListOne);



        
        const cardBackOne = document.getElementById('cardBackOne');
        cardBackOne.innerHTML = `
        <h2 id="ingredientOne">Ingredients<button class="btn saveBtn">
        <i class="fa fa-save" style="font-size:35px;color:white"></i></button></h2>
        <center><a href=${methodOne}>Method</a></center>
        <ul>${ingredientList.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>`;


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

        const existingNutritionListTwo = cardTwo.querySelector('.nutritioninfo');
        if (existingNutritionListTwo) {
            cardTwo.removeChild(existingNutritionListTwo);
        }

        const nutritionListTwo = document.createElement('div');
        nutritionListTwo.classList.add('nutritioninfo');
        cardTwo.appendChild(nutritionListTwo);

        const cardBackTwo = document.getElementById('cardBackTwo');
        cardBackTwo.innerHTML = `
        <h2 id="ingredientTwo">Ingredients<button class="btn saveBtn">

        <i class="fa fa-save" style="font-size:35px;color:white"></i></button></h2>
        <center><a href=${methodTwo}>Method</a></center>
        <ul>${ingredientListTwo.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>      `;


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

        const existingNutritionListThree = cardThree.querySelector('.nutritioninfo');
        if (existingNutritionListThree) {
            cardThree.removeChild(existingNutritionListThree);
        }

        const nutritionListThree = document.createElement('div');
        nutritionListThree.classList.add('nutritioninfo');
        cardThree.appendChild(nutritionListThree);

        const cardBackThree = document.getElementById('cardBackThree');
        cardBackThree.innerHTML = `
        <h2 id="ingredientThree">Ingredients<button class="btn saveBtn">
        <i class="fa fa-save" style="font-size:35px;color:white"></i></button></h2>
        <center><a href=${methodThree}>Method</a></center>
        <ul>${ingredientListThree.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>      `;

        // For cardOne
        nutritionListOne.innerHTML = `
<ul>
    <li>Carbs: ${carbsOne.toFixed(2)}g</li>
    <li>Protein: ${proteinOne.toFixed(2)}g</li>
    <li>Fat: ${fatOne.toFixed(2)}g</li>
    <li>Calories: ${caloriesOne.toFixed(2)}</li>
</ul>
`;

        // For cardTwo
        nutritionListTwo.innerHTML = `
<ul>
    <li>Carbs: ${carbsTwo.toFixed(2)}g</li>
    <li>Protein: ${proteinTwo.toFixed(2)}g</li>
    <li>Fat: ${fatTwo.toFixed(2)}g</li>
    <li>Calories: ${caloriesTwo.toFixed(2)}</li>
</ul>
`;

        // For cardThree
        nutritionListThree.innerHTML = `
<ul>
    <li>Carbs: ${carbsThree.toFixed(2)}g</li>
    <li>Protein: ${proteinThree.toFixed(2)}g</li>
    <li>Fat: ${fatThree.toFixed(2)}g</li>
    <li>Calories: ${caloriesThree.toFixed(2)}</li>
</ul>
`;


        
        let hitsArray = [firstHit, secondHit, thirdHit];
        let imageArray = [imageOne, imageTwo, imageThree];
        let ingredientArray = [ingredientList, ingredientListTwo, ingredientListThree];
        //querySelector for saved recpies 
        const saveBtns = document.querySelectorAll('.saveBtn');
        saveBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const history = document.getElementById('history');
                const btnEl = document.createElement('button');
                btnEl.classList.add('list-group-item');
                btnEl.setAttribute('data-toggle', 'modal');
                btnEl.setAttribute('data-target', '#modal');
                btnEl.textContent = hitsArray[index];
                history.appendChild(btnEl);
                // event listener for modals 
                btnEl.addEventListener('click', () => {
                    const modalTitle = document.getElementById('modalTitle');
                    const modalBody = document.getElementById('modalBody');
                    modalTitle.textContent = recipeData.recipeTitle;
                    const recipeImg = document.createElement('img');
                    recipeImg.setAttribute('src', recipeData.recipeImage);
                    modalBody.innerHTML = '';
                    modalBody.appendChild(recipeImg);
                    const ingreList = document.createElement('ul');
                    recipeData.recipeIngredients.forEach(ingredient => {
                        const li = document.createElement('li');
                        li.textContent = ingredient;
                        ingreList.appendChild(li);
                    });
                    modalBody.appendChild(ingreList);

                });

                const recipeData = {
                    recipeTitle: hitsArray[index],
                    recipeImage: imageArray[index],
                    recipeIngredients: ingredientArray[index],

                };


                // Retrieves the saved recipe data from local storage and add the new recipe data to it
                const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
                savedRecipes.push(recipeData);

                // Save the updated recipe data to local storage
                localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
            });
        });

    })
});

// event listener for the saved recpies 
window.addEventListener('load', () => {
    const history = document.getElementById('history');

    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    // display the modals function 
    savedRecipes.forEach(recipeData => {
        const btnEl = document.createElement('button');
        btnEl.classList.add('list-group-item');
        btnEl.textContent = recipeData.recipeTitle;
        btnEl.setAttribute('data-toggle', 'modal');
        btnEl.setAttribute('data-target', '#modal');
        history.appendChild(btnEl);
        btnEl.addEventListener('click', () => {
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('modalBody');
            modalTitle.textContent = recipeData.recipeTitle;
            const recipeImg = document.createElement('img');
            recipeImg.setAttribute('src', recipeData.recipeImage);
            modalBody.innerHTML = '';
            modalBody.appendChild(recipeImg);
            const ingreList = document.createElement('ul');
            recipeData.recipeIngredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingreList.appendChild(li);
            });
            modalBody.appendChild(ingreList);


        });
    });
});



// clear button function 
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






