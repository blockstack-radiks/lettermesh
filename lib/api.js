import getConfig from 'next/config';

let { apiServer } = getConfig().publicRuntimeConfig.radiks;
if (typeof 'process' !== 'undefined') {
  apiServer = process.env.RADIKS_API_URL;
}

export const fetchBlogPost = async (id) => {
  const url = `${apiServer}/api/posts/${id}`;
  const response = await fetch(url);
  const blogPost = await response.json();
  return blogPost;
};
