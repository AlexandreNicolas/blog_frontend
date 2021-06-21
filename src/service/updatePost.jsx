import api from './api';

const uptadePost = async (newPost, userId) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  await api.put(userId, newPost, config);
};

export default uptadePost;
