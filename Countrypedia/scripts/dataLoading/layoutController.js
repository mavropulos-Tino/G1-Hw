let gridView = true;
let tableView = false;

const gridViewButton = document.getElementById('gridViewButton');
const tableViewButton = document.getElementById('tableViewButton');

const initializeLayoutController = (data, status) => {
    gridViewButton.addEventListener('click', () => {
        if(!status) {
            return;
        }
        enableGridView(); // In utilities.js
        loadData(data, status); // After that we reload the data and the correct format

        // Some functions to reset the filter buttons styles and some boolean toggles;
        setButtonToInactiveStyle();
        setFilterToInactiveState();
        removeFilters(data);
        searchInput.value = '';
    });

    tableViewButton.addEventListener('click', () => {
        if(!status) {
            return;
        }

        // Same as in grid View

        enableTableView();
        loadData(data, status);

        setButtonToInactiveStyle();
        setFilterToInactiveState();
        removeFilters(data);
        searchInput.value = '';
    });
}