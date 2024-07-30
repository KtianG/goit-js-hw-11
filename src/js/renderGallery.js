// Importing necessary modules and functions
import { makePCMarkup } from './makePCMarkup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Exporting the renderGallery function for use in other modules
export { renderGallery };

// Function to render the gallery of images
function renderGallery(target_element, data, clean = true) {
  if (clean) {
    target_element.innerHTML = '';
  }

  let markup = ``;

  // Check if there are no results
  if (data.total === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }

  // Loop through each hit in the data and create HTML markup
  data.hits.forEach(element => {
    markup += makePCMarkup(element);
  });

  // Insert the generated markup into the target element
  target_element.insertAdjacentHTML('beforeend', markup);

  return true;
}
