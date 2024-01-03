// 3) use the same rest countries and print all countries name ,regions,sub-region and populations

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
    var result = JSON.parse(request.response);

    
    if (Array.isArray(result)) {
        
        result.forEach(function (country) {
            var name = country.name.common || "N/A";
            var region = country.region || "N/A";
            var subregion = country.subregion || "N/A";
            var population = country.population || "N/A";

            console.log("Name: " + name);
            console.log("Region: " + region);
            console.log("Subregion: " + subregion);
            console.log("Population: " + population);
            console.log("----------------------");
        });
    } else {
        console.error("Invalid response format");
    }
};
