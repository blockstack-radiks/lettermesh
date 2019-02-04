import React from 'react';
import Link from 'next/link';

import { friendlyId } from '../../lib/utils';
import {
  Container, ImageBG, Body, Backdrop, Title, Anchor,
} from './styled';

export default ({ post }) => (
  <Link
    href={{
      pathname: '/posts/show',
      query: {
        id: friendlyId(post),
      },
    }}
    as={`/posts/${friendlyId(post)}`}
    prefetch
    passHref
  >
    <Anchor>
      <Container>
        <Body>
          <Title>
            {post.attrs.title}
          </Title>
        </Body>
        <Backdrop />
        <ImageBG src={post.attrs.headerImageUrl} />
      </Container>
    </Anchor>
  </Link>
);
