import React from 'react';

import { fetchBlogPost } from '../../lib/api';
import BlogPost from '../../models/blogPost';

export default class ShowBlogPost extends React.Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    const blogPost = await fetchBlogPost(id);
    return {
      blogPost,
    };
    // const blogPost = await BlogPost.findById(id, { decrypt: false });
    // console.log(blogPost);
    // return {
    //   blogPost: blogPost.attrs,
    // };
  }

  render() {
    const { blogPost } = this.props;
    return (
      <span>{blogPost.graphiteUrl}</span>
    );
  }
}
