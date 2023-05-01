import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '34275964-1302058c3a7bcefadef046d6c';
const PRE_PAGE = '12';

export const fetchGallery = async (query, page) => {
  const option = 'image_type=photo&orientation=horizontal';
  const requestURL = `${URL}?q=${query}&page=${page}&key=${KEY}&${option}&per_page=${PRE_PAGE}`;

  const { data } = await axios.get(requestURL);
  return data;
};
