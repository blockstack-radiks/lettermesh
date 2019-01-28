import React from 'react';
import Router from 'next/router';
import {
  Flex, Box, Button,
} from 'blockstack-ui';

import Blog from '../../models/blog';
import Card from '../../components/card';
import Input from '../../components/input';


export default class NewBlog extends React.Component {
  static getInitialProps({ query }) {
    const { id } = query;

    return {
      id,
    };
  }

  state = {
    blog: null,
    name: '',
    typefaceImageUrl: '',
  }

  async componentDidMount() {
    NProgress.start();
    const blog = await Blog.findByUrlParam(this.props.id);
    console.log(blog);
    this.setState({
      name: blog.attrs.name,
      typefaceImageUrl: blog.attrs.typefaceImageUrl,
      blog,
    }, () => {
      NProgress.done();
    });
  }

  async save(evt) {
    if (evt) evt.preventDefault();
    console.log(this.state);
    NProgress.start();
    const { blog, name, typefaceImageUrl } = this.state;
    blog.update({ name, typefaceImageUrl });
    await blog.save();
    // const { name } = this.state;
    // const blog = new Blog({ name });
    // await blog.create();
    // console.log(blog);
    // console.log(this.state);
    Router.push({
      pathname: '/blogs/show',
      query: {
        id: blog._id,
      },
    }, `/blogs/${blog._id}`);
  }

  render() {
    const { blog, name, typefaceImageUrl } = this.state;
    if (!blog) return null;
    return (
      <Flex>
        <Box width={[1, 0.6]} mx="auto">
          <Card title="New Blog">
            <form onSubmit={evt => this.save(evt)}>
              <Input
                placeholder="Your blog's awesome name"
                value={name}
                onChange={evt => this.setState({ name: evt.target.value })}
              />

              <Input
                mt={4}
                placeholder="The header image for your blog"
                value={typefaceImageUrl}
                onChange={evt => this.setState({ typefaceImageUrl: evt.target.value })}
              />

              <Button mt={4} width={1} onClick={() => this.save()}>
                Create
              </Button>
            </form>
          </Card>
        </Box>
      </Flex>
    );
  }
}
