import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // Get the query from the view
    const query = searchView.getInput(); // TODO
    
    if (query) {
        // New search object and add to state
        state.search = new Search(query);

        // Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // Search for recipes
        await state.search.getResults(); // getResults() is async function aka returns promise aka need to await

        // Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10); // Base 10 integer
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
})

/**
 * RECIPE CONTROLLER
 */

const controlRecipe = () => {
    // Get id from URL
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare the UI for changes

        // Create new recipe object
        state.recipe = new Recipe(id);
        
        // Get recipe data
        await state.recipe.getRecipe();

        // Calculate servings and time

        // Render recipe
    }

}

window.addEventListener('hashchange', controlRecipe)