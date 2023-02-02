import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';
import { getPictures } from './js/getPictures';
import { renderGallery } from './js/renderGallery';
import SimpleLightbox from 'simplelightbox';

//getPictures('flower', 1).then(flowers => console.log(flowers));

const search_form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const load_button = document.querySelector('.load-more');

let page = 1;

const searchHandler = event => {
  page = 1;
  event.preventDefault();
  const {
    elements: { searchQuery },
  } = event.currentTarget;

  console.log(searchQuery.value);
};
const loadHandler = () => {
  page += 1;
};

search_form.addEventListener('submit', searchHandler);
load_button.addEventListener('click', loadHandler);
