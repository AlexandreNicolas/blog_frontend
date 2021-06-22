import api from './api';

const uptadePost = async (newPost, userId) => {
  const postURL = `posts/${userId}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  await api.put(postURL, newPost, config);
};

export default uptadePost;
