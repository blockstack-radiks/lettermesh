import React from 'react';
import { Flex, Box, Type } from 'blockstack-ui';

import { Content } from './styled';
import Hr from '../hr';

export default ({ content, graphiteUrl }) => (
  <Flex>
    <Box maxWidth="700px" width={1} mx={[2, 'auto']} mt={8}>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <Hr />
      <Type fontStyle="italic">
        This article was written in
        {' '}
        <a href="https://graphitedocs.com" target="_blank" rel="noopener noreferrer">
          Graphite Docs
        </a>
        , a private and decentralized
        document management application.
        {' '}
        <a href={graphiteUrl} target="_blank" rel="noopener noreferrer">
          View this document in Graphite
        </a>
      </Type>
    </Box>
  </Flex>
);
