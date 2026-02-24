const URL = 'https://restcountries.com/v3.1/independent?status=true&fields=flags,name,population,region,capital,borders,cca3';

document.addEventListener('DOMContentLoaded', function() { // Waits For All DOM Elements To Be Loaded In
    fetch(URL)
        .then(res => {
            res.json()
            .then(data => {

                let status = res.ok;

                loadData(data, status);
                initializeLayoutController(data, status); // Sends data to layoutController.js
                initializeFilterController(data, status); // Sends data to filterController.js
                initializeSearchBar(data, status); // Sends data to searchBarLogic.js
            })
        })
        .catch(error => {console.error(error)});
});