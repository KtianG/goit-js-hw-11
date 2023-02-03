export { makePCMarkup };

function makePCMarkup(hit) {
  let markup = '';

  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = hit;

  markup = `
  <div class="photo-card">
  <a class="gallery-link" href="${largeImageURL}">
      <img
        src="${webformatURL}"
        alt="${tags}"
        loading="lazy"
      />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes</b> <span class="info-item__value">${likes}</span>
      </p>
      <p class="info-item">
        <b>Views</b> <span class="info-item__value">${views}</span>
      </p>

      <p class="info-item">
        <b>Comments</b> <span class="info-item__value">${comments}</span>
      </p>

      <p class="info-item">
        <b>Downloads</b> <span class="info-item__value">${downloads}</span>
      </p>
    </div>
  </div>`;

  return markup;
}
