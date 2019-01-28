import React from 'react';
import Router from 'next/router';
import { Flex, Box, Button } from 'blockstack-ui';
import { getUserAppFileUrl } from 'blockstack/lib/storage';
import { loadUserData } from 'blockstack/lib/auth/authApp';

import Card from '../../../components/card';
import Input from '../../../components/input';

import BlogPost from '../../../models/blogPost';
import Blog from '../../../models/blog';

export default class NewBlogPost extends React.Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    const { _id } = await Blog.findByUrlParam(id);
    return {
      blogId: _id,
    };
  }

  state = {
    title: '',
    graphiteUrl: '',
    headerImageUrl: '',
  }

  async save() {
    NProgress.start();
    const { graphiteUrl, title, headerImageUrl } = this.state;
    const { blogId } = this.props;
    const graphitePaths = graphiteUrl.split('/');
    const graphitePath = graphitePaths[graphitePaths.length - 1];
    const [graphiteUsername, graphiteID] = graphitePath.split('-');
    const graphiteJSONUrl = await getUserAppFileUrl(`public/${graphiteID}.json`, graphiteUsername, 'https://app.graphitedocs.com');
    const { username } = loadUserData();
    const blogPost = new BlogPost({
      title,
      graphiteUrl: graphiteJSONUrl,
      graphiteID,
      graphiteUsername,
      headerImageUrl,
      userGroupId: blogId,
      authorName: username,
    });
    await blogPost.save();
    Router.push({
      pathname: '/posts/show',
      query: {
        id: blogPost._id,
      },
    }, `/posts/${blogPost._id}`);
    console.log(blogPost);

    // NProgress.done();
  }

  render() {
    const { title, graphiteUrl, headerImageUrl } = this.state;
    return (
      <Flex>
        <Box width={[1, 0.6]} mx="auto">
          <Card title="New Blog Post">
            <Input
              placeholder="Title"
              value={title}
              onChange={evt => this.setState({ title: evt.target.value })}
            />
            <Input
              placeholder="Graphite URL"
              mt={5}
              value={graphiteUrl}
              onChange={evt => this.setState({ graphiteUrl: evt.target.value })}
            />
            <Input
              placeholder="Header Image URL"
              mt={5}
              value={headerImageUrl}
              onChange={evt => this.setState({ headerImageUrl: evt.target.value })}
            />
            <Button mt={5} width={1} onClick={() => this.save()}>
              Create
            </Button>
          </Card>
        </Box>
      </Flex>
    );
  }
}
