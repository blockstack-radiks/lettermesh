import React from 'react';
import { Flex, Box } from 'blockstack-ui';

import { Diagonal, Container } from './styled';
import Brand from '../brand';

export default () => (
  <div>
    <Diagonal mt={4} />
    <Container>
      <Box mx="auto">
        <Brand />
      </Box>
    </Container>
  </div>
);
