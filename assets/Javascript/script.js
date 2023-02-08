

var hello = "Hello";

console.log(hello);

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


    });

