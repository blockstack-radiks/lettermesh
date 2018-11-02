import React from 'react';
import { Flex, Box } from 'blockstack-ui';
import Link from 'next/link';

// import Icon from './icon';
import {
  Icon, Name, SubName, Container,
} from './styled';

export default ({ href }) => (
  <Link href="/" passHref>
    <Container href={href}>
      <Flex mx="auto" width="390px">
        <Box><Icon src="/static/icon/xs-icon.svg" /></Box>
        <Box ml={1}>
          <Name>LetterMesh</Name>
          <SubName>Decentralized Blogging</SubName>
        </Box>
      </Flex>
    </Container>
  </Link>
);
