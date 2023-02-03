import { makePCMarkup } from './makePCMarkup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export { renderGallery };

function renderGallery(target_element, data, clean = true) {
  if (clean) {
    target_element.innerHTML = '';
  }

  let markup = ``;
  console.log(data);
  if (data.total === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }

  data.hits.forEach(element => {
    markup += makePCMarkup(element);
  });

  target_element.insertAdjacentHTML('beforeend', markup);

  return true;
}
