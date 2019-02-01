import { Box, Type } from 'blockstack-ui';
import Styled from 'styled-components';

export const Hero = Styled(Box)`
  background-color: #bebedaa8;
`;

export const BlogCard = Styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  text-align: center;
  text-decoration: none;
  color: black;

  img {
    display: block;
    max-width: 80%;
    margin: 0px auto;
    max-height: 80px;
  }
`;

export const BlogDescription = Styled(Type.p)`
  color: black;
  text-decoration: none;
  font-size: 22px;
  max-width: 80%;
`;
