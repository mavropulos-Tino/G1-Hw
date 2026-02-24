const filterRegion = data => { // We loop through all country cards or rows and check for incorrect region value and add the class hidden
    data.forEach(country => { 
        const countryInstance = document.getElementById(`ID:${country.cca3}`);
        if(country.region !== 'Europe') {
            countryInstance.classList.add('hidden');
        }
    });
}

const filterNeighbours = data => { // We loop through all country cards or rows and check for if it doesnt include any of the array CCA3 ID's and set to hidden
    const borderingCountires = ['SRB', 'GRC', 'ALB', 'BGR', 'UNK'];
    data.forEach(country => { 
        const countryInstance = document.getElementById(`ID:${country.cca3}`);
        if (!(borderingCountires.includes(country.cca3))) {
            countryInstance.classList.add('hidden');
        }
    });
}

const filterMacedonia = data => { // We loop through all country cards or rows and check for incorrect CCA3 ID value and add the class hidden
    data.forEach(country => { 
        const countryInstance = document.getElementById(`ID:${country.cca3}`);
        if (country.cca3 !== 'MKD') {
            countryInstance.classList.add('hidden');
        }
    });
}