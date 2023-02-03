import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';
import { getPictures } from './js/getPictures';
import { renderGallery } from './js/renderGallery';
import SimpleLightbox from 'simplelightbox';

//getPictures('flower', 1).then(flowers => console.log(flowers));

const search_form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const load_button = document.querySelector('.load-more');

let lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
let search_query = '';

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
      lightbox.refresh();
    });
  }
};
const loadHandler = () => {
  page += 1;

  if (search_query.length !== 0) {
    getPictures(search_query, page).then(data => {
      renderGallery(gallery, data, false);
      lightbox.refresh();
    });
  }
};

search_form.addEventListener('submit', searchHandler);
load_button.addEventListener('click', loadHandler);
