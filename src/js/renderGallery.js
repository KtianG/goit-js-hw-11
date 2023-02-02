import { makePCMarkup } from './makePCMarkup';

export { renderGallery };

function renderGallery(target_element, data, clean) {
  if (clean) {
    target_element.innerHTML = '';
  }
}
