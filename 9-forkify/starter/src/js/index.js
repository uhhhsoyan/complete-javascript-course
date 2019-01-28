// Global app controller

import axios from 'axios';

async function getResults(query) {
    const key = '9bf96871a08420ca49b5b2502b2e6f64';
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
}

// 9bf96871a08420ca49b5b2502b2e6f64
// https://www.food2fork.com/api/search