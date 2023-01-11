import { API_KEY } from '@env';

export const getImages = async (userSearch = '') => {
  // get pics
  const resp = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${userSearch}&image_type=photo&pretty=true`
  );
  const data = await resp.json();
  const { hits } = data;
  return hits;
};
