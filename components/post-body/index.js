import React from 'react';
import { Flex, Box } from 'blockstack-ui';

import { Content } from './styled';

export default ({ content }) => (
  <Flex>
    <Box maxWidth="700px" width={1} mx={[2, 'auto']} mt={8}>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  </Flex>
);
