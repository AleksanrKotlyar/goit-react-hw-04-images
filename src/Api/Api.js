import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export async function getQuery(query, page) {
  try {
    const response = await axios.get('/api/', {
      params: {
        key: '30050939-5a79da0c6fd6f5109f8d21733',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 12,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
