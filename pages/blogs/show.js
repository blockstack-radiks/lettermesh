import React from 'react';
import Link from 'next/link';
import {
  Box, Type, Button,
} from 'blockstack-ui';
import moment from 'moment';

import Blog from '../../models/blog';
import BlogPost from '../../models/blogPost';
import Hr from '../../components/hr';
import { Table, Th, Td } from '../../components/table';

export default class ShowBlog extends React.Component {
  static getInitialProps({ query }) {
    return {
      id: query.id,
    };
  }

  state = {
    blog: null,
    blogPosts: [],
  }

  async componentDidMount() {
    NProgress.start();
    const { id } = this.props;
    const [blog, blogPosts] = await Promise.all([
      Blog.findById(id),
      BlogPost.fetchList({
        userGroupId: id,
      }),
    ]);
    this.setState({ blog, blogPosts }, () => {
      NProgress.done();
    });
  }

  blogPosts() {
    return this.state.blogPosts.map(blogPost => (
      <tr key={blogPost._id}>
        <Td>{blogPost.attrs.title}</Td>
        <Td>{blogPost.attrs.authorName}</Td>
        <Td>{moment(blogPost.attrs.createdAt).format('MMMM Do, YYYY')}</Td>
        <Td>
          <Link href={`/blogs/${this.props.id}/posts/${blogPost._id}/edit`}>
            <Button size="small" ml={0}>
              Edit
            </Button>
          </Link>
          <Link href={`/posts/${blogPost._id}`}>
            <Button size="small" ml={0}>
              View
            </Button>
          </Link>
        </Td>
      </tr>
    ));
  }

  render() {
    const { blog } = this.state;
    if (!blog) return null;
    return (
      <Box>
        <Type.h1 display="block">
          {blog.attrs.name}
          <Link href={`/blogs/${blog._id}/edit`} passHref>
            <Button size="small" mt={4}>
              Edit
            </Button>
          </Link>
        </Type.h1>
        <Hr />
        <Type.h3 mt={3} display="block">
          Blog Posts
          <Link href={`/blogs/${blog._id}/posts/new`} passHref>
            <Button size="small" mt={4}>
              Write a New Post
            </Button>
          </Link>
        </Type.h3>
        <Table mt={6}>
          <thead>
            <tr>
              <Th>Title</Th>
              <Th>Author</Th>
              <Th>Created</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {this.blogPosts()}
          </tbody>
        </Table>
      </Box>
    );
  }
}
