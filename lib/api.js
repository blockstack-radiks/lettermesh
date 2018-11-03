import getConfig from 'next/config';

const { apiServer } = getConfig().publicRuntimeConfig.radiks;

export const fetchBlogPost = async (id) => {
  const url = `${apiServer}/api/posts/${id}`;
  const response = await fetch(url);
  const blogPost = await response.json();
  return blogPost;
};
