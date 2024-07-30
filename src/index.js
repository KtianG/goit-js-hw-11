// Importing necessary styles and modules
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';
import { getPictures } from './js/getPictures';
import { PER_PAGE } from './js/getPictures';
import { renderGallery } from './js/renderGallery';
import SimpleLightbox from 'simplelightbox';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Selecting DOM elements
const search_form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const load_button = document.querySelector('.load-more');
load_button.style.display = 'none';

// Initialize SimpleLightbox for image lightbox functionality
let lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Variables to keep track of the current page and search query
let page = 1;
let search_query = '';

// Handler function for the search form submission
const searchHandler = event => {
  page = 1;
  event.preventDefault();
  const {
    elements: { searchQuery },
  } = event.currentTarget;

  search_query = searchQuery.value;

  if (search_query.length !== 0) {
    getPictures(search_query, page).then(data => {
      renderGallery(gallery, data, true);
      if (data.totalHits !== 0) {
        load_button.style.display = 'block';
        if (page === 1) {
          Notify.success(`Hooray! We found ${data.totalHits} images!`);
        }
      }

      lightbox.refresh();
    });
  }
};

// Handler function for the "Load more" button click
const loadHandler = () => {
  page += 1;

  if (search_query.length !== 0) {
    getPictures(search_query, page).then(data => {
      renderGallery(gallery, data, false);
      lightbox.refresh();
      if (PER_PAGE * page >= data.totalHits) {
        load_button.style.display = 'none';
        Notify.warning(
          "We're sorry, but you've reached the end of search results."
        );
      }
    });
  }
};

// Adding event listeners to handle user interactions
search_form.addEventListener('submit', searchHandler);
load_button.addEventListener('click', loadHandler);
