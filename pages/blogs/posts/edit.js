import React from 'react';
import Router from 'next/router';
import { Flex, Box, Button } from 'blockstack-ui';
import { getUserAppFileUrl } from 'blockstack/lib/storage';
import { loadUserData } from 'blockstack/lib/auth/authApp';

import Card from '../../../components/card';
import Input from '../../../components/input';

import { makeGraphiteUrl, friendlyId } from '../../../lib/utils';

import BlogPost from '../../../models/blogPost';
// import Blog from '../../../models/blog';

export default class EditBlogPost extends React.Component {
  static async getInitialProps({ query }) {
    console.log(query);
    return {
      // blogId: query.blogId,
      id: query.id,
    };
  }

  state = {
    title: '',
    graphiteUrl: '',
    headerImageUrl: '',
    blogPost: null,
  }

  async componentDidMount() {
    NProgress.start();
    const { id } = this.props;
    const blogPost = await BlogPost.findByUrlParam(id);
    const {
      title, graphiteID, graphiteUsername, headerImageUrl,
    } = blogPost.attrs;
    this.setState({
      blogPost,
      title,
      headerImageUrl,
      graphiteUrl: makeGraphiteUrl(graphiteUsername, graphiteID),
    }, () => {
      NProgress.done();
    });
  }

  async save() {
    NProgress.start();
    const { graphiteUrl, title, headerImageUrl } = this.state;
    const graphitePaths = graphiteUrl.split('/');
    const graphitePath = graphitePaths[graphitePaths.length - 1];
    const [graphiteUsername, graphiteID] = graphitePath.split('-');
    const graphiteJSONUrl = await getUserAppFileUrl(`public/${graphiteID}.json`, graphiteUsername, 'https://app.graphitedocs.com');
    const { username } = loadUserData();
    const { blogPost } = this.state;
    blogPost.update({
      title,
      graphiteUrl: graphiteJSONUrl,
      graphiteID,
      graphiteUsername,
      authorName: username,
      headerImageUrl,
    });
    await blogPost.save();
    Router.push({
      pathname: '/posts/show',
      query: {
        id: friendlyId(blogPost),
      },
    }, `/posts/${friendlyId(blogPost)}`);
    console.log(blogPost);
  }

  render() {
    const {
      title, graphiteUrl, blogPost, headerImageUrl,
    } = this.state;
    if (!blogPost) return null;
    return (
      <Flex>
        <Box width={[1, 0.6]} mx="auto">
          <Card title="Edit Blog Post">
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
              Update
            </Button>
          </Card>
        </Box>
      </Flex>
    );
  }
}
