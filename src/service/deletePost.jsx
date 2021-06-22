import api from './api';

const deletePost = async (userId) => {
  const postURL = `posts/${userId}`;
  await api.delete(postURL);
};

export default deletePost;
