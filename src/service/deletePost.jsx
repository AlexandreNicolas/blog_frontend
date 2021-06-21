import api from './api';

const deletePost = async (userId) => {
  const postURL = userId;
  await api.delete(postURL);
};

export default deletePost;
