import React from 'react';
import { Flex, Box } from 'blockstack-ui';

// import Icon from './icon';
import { Icon, Name, SubName } from './styled';

export default () => (
  <Flex mx="auto" width="390px">
    <Box><Icon src="/static/icon/xs-icon.svg" /></Box>
    <Box ml={1}>
      <Name>LetterMesh</Name>
      <SubName>Decentralized Blogging</SubName>
    </Box>
  </Flex>
);
