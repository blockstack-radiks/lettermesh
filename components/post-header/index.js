import React from 'react';
import { Flex, Box, Type } from 'blockstack-ui';
import moment from 'moment';

import { Container, Image, AuthorImage } from './styled';

export default ({ blogPost }) => (
  <Container>
    <Flex mx={[2, 6]}>
      <Box width={[1, 0.5]} mr={[0, 4]}>
        <Flex justifyContent="center" alignItems="center" height="100%">
          <Box width={1}>
            <Type.h1 display="block" color="black">
              {blogPost.title}
            </Type.h1>
            <Flex mt={3}>
              <Box>
                <AuthorImage src={blogPost.author.profile.image[0].contentUrl} />
              </Box>
              <Box ml={4}>
                <Type display="block" fontSize="24px" mt={2}>{blogPost.author.username}</Type>
                <Type color="textGray" fontSize="18px" mt={2}>{moment(blogPost.createdAt).format('MMMM Do, YYYY')}</Type>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box width={[0, 0.5]} ml={[0, 4]}>
        <Image src={blogPost.headerImageUrl} />
      </Box>
    </Flex>
  </Container>
);
