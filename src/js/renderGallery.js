import { makePCMarkup } from './makePCMarkup';

export { renderGallery };

function renderGallery(target_element, data, clean) {
  if (clean) {
    target_element.innerHTML = '';
  }

  let markup = ``;
  console.log(data);

  data.hits.forEach(element => {
    markup += makePCMarkup(element);
  });

  target_element.innerHTML = markup;

  return markup;
}
