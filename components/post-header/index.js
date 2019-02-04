import React from 'react';
import { Flex, Box, Type } from 'blockstack-ui';
import moment from 'moment';

import { Container, Image, AuthorImage } from './styled';

export default ({ blogPost }) => {
  const { image } = blogPost.author.profile;
  const imageUrl = image && image[0] && image[0].contentUrl;
  return (
    <Container>
      <Flex mx={[2, 6]}>
        <Box width={[1, 0.5]} mr={[0, 4]}>
          <Flex justifyContent="center" alignItems="center" height="100%">
            <Box width={1}>
              <Type.h1 display="block" color="black">
                {blogPost.title}
              </Type.h1>
              <Flex mt={3}>
                {imageUrl && (
                  <Box>
                    <AuthorImage src={imageUrl} />
                  </Box>
                )}
                <Box ml={imageUrl ? 4 : 0}>
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
};
