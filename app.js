import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
async function loadData() {
    // fetch all dogs
    const data = await getDogs();
    // render and append all dog cards to the container
    for (let dog of data) {
        const dogDiv = renderDogCard(dog);
        dogListContainer.append(dogDiv);
    }
}
loadData();