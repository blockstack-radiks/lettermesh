import React from 'react';
import { Flex, Box } from 'blockstack-ui';

import Nav from './nav';

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Nav />
        <Flex>
          <Box width={[1, 0.9]} mt={6}>
            {children}
          </Box>
        </Flex>
      </div>
    );
  }
}
