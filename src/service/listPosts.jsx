import api from './api';

const listPosts = async () => {
  const postURL = 'posts';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await api.get(postURL, config);
    if (response.status !== 200) {
      throw Error({ response });
    }
    return response.data;
  } catch (error) {
    throw Error(error);
  }
};

export default listPosts;
