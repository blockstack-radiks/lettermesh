import React from 'react';
import Link from 'next/link';
import { Flex, Box, Type } from 'blockstack-ui';
import { UserGroup } from 'radiks';
import Card from '../../components/card';

export default class ShowBlog extends React.Component {
  static getInitialProps({ query }) {
    return {
      id: query.id,
    };
  }

  state = {
    blog: null,
  }

  async componentDidMount() {
    NProgress.start();
    const { id } = this.props;
    const blog = await UserGroup.findById(id);
    this.setState({ blog }, () => {
      NProgress.done();
    });
  }

  render() {
    const { blog } = this.state;
    console.log(blog);
    if (!blog) return null;
    return (
      <Box>
        <Type.h1 display="block">{blog.attrs.name}</Type.h1>
        <Type.h3 mt={3} display="block">Blog Posts</Type.h3>
        <Flex mt={3}>
          <Box width={1 / 6} mr={3}>
            <Card>
              <Link passHref href={`/blogs/${blog._id}/posts/new`}>
                <Type textAlign="center" display="block" is="a">Write a new post</Type>
              </Link>
            </Card>
          </Box>
        </Flex>
      </Box>
    );
  }
}
