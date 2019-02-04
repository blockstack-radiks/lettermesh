import React from 'react';
import { Flex, Box } from 'blockstack-ui';
import BackburgerIcon from 'mdi-react/BackburgerIcon';
import { loadUserData } from 'blockstack/lib/auth/authApp';
import Link from 'next/link';

import Brand from '../brand';
import SideNav from '../side-nav';
import { friendlyId } from '../../lib/utils';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.sideNav = React.createRef();
  }

  render() {
    const { blogAttrs } = this.props;
    const useSideNav = (typeof window !== 'undefined' && !!loadUserData());
    const friendlyIdAttrs = blogAttrs ? { attrs: blogAttrs } : null;
    return (
      <Flex mt={3} style={{ overflowX: 'hidden' }}>
        <Box mx={[2, 8]}>
          {blogAttrs ? (
            <Link
              href={{
                pathname: '/blogs/show',
                query: {
                  id: friendlyId(friendlyIdAttrs),
                },
              }}
              as={`/blogs/${friendlyId(friendlyIdAttrs)}`}
              prefetch
            >
              <a>
                <img src={blogAttrs.typefaceImageUrl} alt="Header" height="40" />
              </a>
            </Link>
          ) : <Brand />}
        </Box>
        {useSideNav && (
          <>
            <Box ml="auto" mr={[2, 8]} mt={2}>
              <BackburgerIcon onClick={() => this.sideNav.current.toggle()} style={{ cursor: 'pointer' }} />
            </Box>
            <SideNav ref={this.sideNav} />
          </>
        )}
      </Flex>
    );
  }
}
