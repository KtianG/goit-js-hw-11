import 'regenerator-runtime/runtime';
import axios from 'axios';

export { getPictures };

const API_KEY = '33326758-3f776db476411dd79607b9f62';
const BASE_URL = 'https://pixabay.com/api/';
const parameters = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 40,
  page: 1,
};

async function getPictures(query, page) {
  try {
    parameters.q = query;
    parameters.page = page;

    const images = await axios.get(BASE_URL, { params: parameters });
    return images.data;
  } catch (error) {
    console.log(error);
  }
}
