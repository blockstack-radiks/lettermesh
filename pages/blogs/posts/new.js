import React from 'react';
import Router from 'next/router';
import { Flex, Box, Button } from 'blockstack-ui';
import { getUserAppFileUrl } from 'blockstack/lib/storage';
import { loadUserData } from 'blockstack/lib/auth/authApp';

import Card from '../../../components/card';
import Input from '../../../components/input';

import BlogPost from '../../../models/blogPost';

export default class NewBlogPost extends React.Component {
  static getInitialProps({ query }) {
    console.log(query);
    return {
      blogId: query.id,
    };
  }

  state = {
    title: '',
    graphiteUrl: '',
  }

  async save() {
    NProgress.start();
    const { graphiteUrl, title } = this.state;
    const { blogId } = this.props;
    const graphitePaths = graphiteUrl.split('/');
    const graphitePath = graphitePaths[graphitePaths.length - 1];
    const [graphiteUsername, graphiteID] = graphitePath.split('-');
    console.log(graphiteUsername, graphiteID);
    const graphiteJSONUrl = await getUserAppFileUrl(`public/${graphiteID}.json`, graphiteUsername, 'https://app.graphitedocs.com');
    console.log(graphiteJSONUrl);
    const { username } = loadUserData();
    const blogPost = new BlogPost({
      title,
      graphiteUrl: graphiteJSONUrl,
      userGroupId: blogId,
      authorName: username,
    });
    await blogPost.save();
    Router.push({
      pathname: '/posts/show',
      query: {
        id: blogPost.id,
      },
    }, `/posts/${blogPost._id}`);
    console.log(blogPost);

    // NProgress.done();
  }

  render() {
    const { title, graphiteUrl } = this.state;
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
            <Button mt={5} width={1} onClick={() => this.save()}>
              Create
            </Button>
          </Card>
        </Box>
      </Flex>
    );
  }
}
