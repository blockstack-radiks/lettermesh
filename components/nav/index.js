import React from 'react';
import { Flex, Box } from 'blockstack-ui';
import BackburgerIcon from 'mdi-react/BackburgerIcon';

import Brand from '../brand';
import SideNav from '../side-nav';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.sideNav = React.createRef();
  }

  render() {
    const { blogHeaderImage } = this.props;
    return (
      <Flex mt={3} style={{ overflowX: 'hidden' }}>
        <Box mx={[2, 8]}>
          {blogHeaderImage ? (
            <img src={blogHeaderImage} alt="Header" height="40" />
          ) : <Brand />}
        </Box>
        <Box ml="auto" mr={[2, 8]} mt={2}>
          <BackburgerIcon onClick={() => this.sideNav.current.toggle()} style={{ cursor: 'pointer' }} />
        </Box>
        <SideNav ref={this.sideNav} />
      </Flex>
    );
  }
}
