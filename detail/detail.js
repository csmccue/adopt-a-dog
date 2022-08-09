import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

console.log(window.location);
console.log('stealing this from julie, hello from detail.js');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));
const dogDetailContainer = document.getElementById('dog-detail-container');

async function loadData() {
    const data = await getDog(params.get('id'));
    const dogDiv = renderDogDetail(data);
    dogDetailContainer.append(dogDiv);
}
loadData();
// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
