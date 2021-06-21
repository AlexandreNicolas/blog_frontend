import api from './api';

const createPost = async (newPost) => {
  const postURL = '';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  api.post(postURL, newPost, config);
};

export default createPost;
