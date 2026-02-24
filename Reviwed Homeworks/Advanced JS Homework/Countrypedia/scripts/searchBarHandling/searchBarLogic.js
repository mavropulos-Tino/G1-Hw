const searchInput = document.getElementById('searchInput');

const initializeSearchBar = (data, status) => {
    if(!status) {
        return;
    }

    const searchFilter = searchTerm => {
        const searchTermLength = searchTerm.length; // We get the length of the search term string

        data.forEach(country => {
            // Then we take the first `searchTermLength` words of every countrys name in lowercase
            const slicedCountryName = country.name.common.toLowerCase().substring(0, searchTermLength);
            const countryInstance = document.getElementById(`ID:${country.cca3}`);
            
            // Then we just ocmpare the search term and the country name substirng and apply the correct class style
            if(slicedCountryName !== searchTerm) {
                countryInstance.classList.add('hidden');
            } else {
                countryInstance.classList.remove('hidden');
            }
        });
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        searchFilter(searchTerm);
    });
}