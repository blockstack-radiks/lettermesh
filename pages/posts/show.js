import React from 'react';

import { fetchBlogPost } from '../../lib/api';
import { makeGraphiteUrl } from '../../lib/utils';
import PostHeader from '../../components/post-header';
import PostBody from '../../components/post-body';

export default class ShowBlogPost extends React.Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    const blogPost = await fetchBlogPost(id);
    return {
      blogPost,
      blogHeaderImage: blogPost.blog.typefaceImageUrl,
      useContainer: false,
    };
  }

  render() {
    const { blogPost } = this.props;
    return (
      <>
        <PostHeader blogPost={blogPost} />
        <PostBody
          content={blogPost.sanitizedContent}
          graphiteUrl={makeGraphiteUrl(blogPost.graphiteUsername, blogPost.graphiteID)}
        />
      </>
    );
  }
}
