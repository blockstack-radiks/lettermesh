import React from 'react';
import { Type } from 'blockstack-ui';

import { Container, Header, Body } from './styled';

export default ({ title, children }) => (
  <Container>
    {title && (
      <Header>
        <Type fontSize={3}>{title}</Type>
      </Header>
    )}
    <Body>
      {children}
    </Body>
  </Container>
);
