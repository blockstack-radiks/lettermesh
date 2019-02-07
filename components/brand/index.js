import React from 'react';
import { Flex, Box } from 'blockstack-ui';
import Link from 'next/link';

// import Icon from './icon';
import {
  Icon, Name, SubName, Container,
} from './styled';

export default () => (
  <Link
    href={{
      pathname: '/pages/_index',
    }}
    prefetch
  >
    <a>
      <img src="https://s3.amazonaws.com/radiks/LetterMesh_TypeFace.svg" alt="LetterMesh" height="40" />
    </a>
  </Link>
);
