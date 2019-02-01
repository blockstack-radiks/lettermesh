import React from 'react';
import Router from 'next/router';
import {
  Flex, Box, Button,
} from 'blockstack-ui';

import Blog from '../../models/blog';
import Card from '../../components/card';
import Input from '../../components/input';

import { friendlyId } from '../../lib/utils';


export default class NewBlog extends React.Component {
  state = {
    name: '',
  }

  async save(evt) {
    NProgress.start();
    if (evt) evt.preventDefault();
    const { name } = this.state;
    const blog = new Blog({ name });
    await blog.create();
    console.log(blog);
    console.log(this.state);
    Router.push({
      pathname: '/blogs/admin',
      query: {
        id: friendlyId(blog),
      },
    }, `/blogs/${friendlyId(blog)}/admin`);
  }

  render() {
    return (
      <Flex>
        <Box width={[1, 0.6]} mx="auto">
          <Card title="New Blog">
            <form onSubmit={evt => this.save(evt)}>
              <Input
                placeholder="Your blog's awesome name"
                value={this.state.name}
                onChange={evt => this.setState({ name: evt.target.value })}
              />
            </form>

            <Button mt={4} width={1} onClick={() => this.save()}>
              Create
            </Button>
          </Card>
        </Box>
      </Flex>
    );
  }
}
