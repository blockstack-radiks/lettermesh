import React from 'react';
import { Flex, Box } from 'blockstack-ui';
// import Link from 'next/link';
import Head from '../components/head';
// import Nav from '../components/nav';
import Brand from '../components/brand';

const Home = () => (
  <div>
    <Head title="Home" />
    <Flex>
      <Box width={1} justifyContent="center">
        <Brand />
      </Box>
    </Flex>
  </div>
);

export default Home;
