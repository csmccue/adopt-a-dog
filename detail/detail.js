import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

//console.log('we are inside the detail.js stuff');

const params = new URLSearchParams(window.location.search);
const dogDetailContainer = document.getElementById('dog-detail-container');

async function loadData() {
    const data = await getDog(params.get('id'));
    //console.log(data); // defined!
    const dogDiv = renderDogDetail(data);
    dogDetailContainer.append(dogDiv);
}
loadData();
// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
