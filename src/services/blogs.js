import axios from 'axios';
const baseUrl = '/api/blogs';

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const create = async (blog, token) => {
  const request = await axios.post(baseUrl, blog, {
    headers: {
      Authorization: 'bearer ' + token, //the token is a variable which holds the token
    },
  });
  return request.data;
};

export default { getAll, create };
