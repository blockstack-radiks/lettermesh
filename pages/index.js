import React from 'react';
import {
  Flex, Type, Box, Button,
} from 'blockstack-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Link from 'next/link';

import Head from '../components/head';
import { Hero, BlogCard, BlogDescription } from '../components/home/styled';

import UserActions from '../stores/user/actions';
import Blog from '../models/blog';

import { friendlyId } from '../lib/utils';

class Home extends React.Component {
  static async getInitialProps() {
    const blogs = await Blog.fetchList({
      name: 'LetterMesh,radiks.js',
    }, { decrypt: false });
    return {
      blogs,
    };
  }


  async componentDidMount() {
    window.superSecretLogin = this.props.login;
    await this.props.handleLogIn();
  }

  requestInvite = () => {
    window.open('mailto:hello@lettermesh.com?subject=Requesting an Invite', '_self');
  }

  render() {
    const { blogs } = this.props;
    return (
      <div>
        <Head title="Home" />
        <Flex flexWrap="wrap">
          <Hero width={1} px={7} py={4}>
            <Flex>
              <Box width={[1, 3 / 4]} pr={4}>
                <Type.h1 color="black">LetterMesh is a decentralized blogging platform.</Type.h1>
                <Type.h3 display="block" color="black" mt={6}>
                  With LetterMesh, you store your own data, so you can never lose it.
                  Even if this website shuts down, your data is never lost.
                </Type.h3>
                <Type.p mt={6} display="block">
                  Want to start writing?
                </Type.p>
                <Button onClick={this.props.handleLogIn} my={6} href="mailto:hello@lettermesh.com">
                  Sign In with Blockstack
                </Button>
              </Box>
              <Box width={[0, 1 / 4]}>
                <img src="/static/mesh.svg" alt="Mesh" height="200" />
              </Box>
            </Flex>
          </Hero>
          <Box width={1}>
            <Type.h1 textAlign="center" color="black" display="block" my={5}>
              Featured Blogs:
            </Type.h1>
            <Flex>
              {blogs.map(blog => (
                <Box width={[1, 1 / 2]} px={5} my={6} key={blog._id}>
                  <Link
                    prefetch
                    href={{
                      pathname: '/blogs/show',
                      query: {
                        id: friendlyId(blog),
                      },
                    }}
                    as={`/blogs/${friendlyId(blog)}`}
                  >
                    <a>
                      <BlogCard>
                        <img src={blog.attrs.typefaceImageUrl} alt={blog.attrs.name} />
                        {/* <Type.p display="block">
                          {blog.attrs.description}
                        </Type.p> */}

                        <BlogDescription>
                          {blog.attrs.description}
                        </BlogDescription>
                      </BlogCard>
                    </a>
                  </Link>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, UserActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
