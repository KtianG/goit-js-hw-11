// Exporting the makePCMarkup function for use in other modules
export { makePCMarkup };

// Function to create HTML markup for a photo card
function makePCMarkup(hit) {
  let markup = '';

  // Destructuring hit object to extract image details
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = hit;

  // Creating the HTML markup for the photo card
  markup = `
  <div class="photo-card">
  <a class="gallery-link" href="${largeImageURL}">
      <img class="thumb"
        src="${webformatURL}"
        alt="${tags}"
        loading="lazy"
      />
    </a>
    <div class="info">
      <p class="info-item">
        <b>&nbspLikes&nbsp</b> <span class="info-item__value">${likes}</span>
      </p>
      <p class="info-item">
        <b>&nbspViews&nbsp</b> <span class="info-item__value">${views}</span>
      </p>

      <p class="info-item">
        <b>&nbspComments&nbsp</b> <span class="info-item__value">${comments}</span>
      </p>

      <p class="info-item">
        <b>Downloads</b> <span class="info-item__value">${downloads}</span>
      </p>
    </div>
  </div>`;

  return markup;
}
