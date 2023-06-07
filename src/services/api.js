import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, page) => {
  console.log(query);

  const params = new URLSearchParams({
    key: '35381512-dde9d5be5a6a0ea2b84aeda4e',
    q: query,
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const response = await axios.get(`?${params}`);

  // if (!response.ok) {
  //   throw new Error('Smth went wrong');
  // }

  return response.data;
};
