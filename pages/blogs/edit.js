import React from 'react';
import Router from 'next/router';
import {
  Flex, Box, Button, Textarea,
} from 'blockstack-ui';

import Blog from '../../models/blog';
import Card from '../../components/card';
import Input from '../../components/input';

import { friendlyId } from '../../lib/utils';


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
    description: '',
  }

  async componentDidMount() {
    NProgress.start();
    const blog = await Blog.findByUrlParam(this.props.id);
    console.log(blog);
    const { name, description, typefaceImageUrl } = blog.attrs;
    this.setState({
      name,
      typefaceImageUrl,
      description,
      blog,
    }, () => {
      NProgress.done();
    });
  }

  async save(evt) {
    if (evt) evt.preventDefault();
    console.log(this.state);
    NProgress.start();
    const {
      blog, name, typefaceImageUrl, description,
    } = this.state;
    blog.update({ name, typefaceImageUrl, description });
    await blog.save();
    // const { name } = this.state;
    // const blog = new Blog({ name });
    // await blog.create();
    // console.log(blog);
    // console.log(this.state);
    Router.push({
      pathname: '/blogs/admin',
      query: {
        id: friendlyId(blog),
      },
    }, `/blogs/${friendlyId(blog)}/admin`);
  }

  render() {
    const {
      blog, name, typefaceImageUrl, description,
    } = this.state;
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

              <Textarea
                mt={4}
                placeholder="How do you describe this blog?"
                value={description}
                onChange={evt => this.setState({ description: evt.target.value })}
              />

              <Input
                mt={4}
                placeholder="The header image for your blog"
                value={typefaceImageUrl}
                onChange={evt => this.setState({ typefaceImageUrl: evt.target.value })}
              />

              <Button mt={4} width={1} onClick={() => this.save()}>
                Update
              </Button>
            </form>
          </Card>
        </Box>
      </Flex>
    );
  }
}
