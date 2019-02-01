import React from 'react';
import { Flex, Box, Type } from 'blockstack-ui';

import Blog from '../../models/blog';
import BlogPost from '../../models/blogPost';

import Hr from '../../components/hr';
import PostCard from '../../components/post-card';

export default class ShowBlog extends React.Component {
  static async getInitialProps({ query }) {
    const blog = await Blog.findByUrlParam(query.id, { decrypt: false });
    const posts = await BlogPost.fetchList({
      userGroupId: blog._id,
    }, { decrypt: false });
    return {
      blog,
      posts,
      blogHeaderImage: blog.typefaceImageUrl,
    };
  }

  posts() {
    const { posts } = this.props;
    return posts.map(post => (
      <Box width={[1, 1 / 3]} mt={5} px={3} key={post._id}>
        <PostCard post={post} />
      </Box>
    ));
  }

  render() {
    const { blog } = this.props;
    return (
      <Flex flexWrap="wrap">
        <Box width={1}>
          <Type.h1 textAlign="center" display="block" color="black">
            {blog.attrs.name}
          </Type.h1>
          <Type.h2 textAlign="center" display="block" fontSize="24px" mt={3}>
            {blog.attrs.description}
          </Type.h2>
          <Hr />
        </Box>
        <Flex flexWrap="wrap" flexDirection="row" width={1}>
          {this.posts()}
        </Flex>
      </Flex>
    );
  }
}
