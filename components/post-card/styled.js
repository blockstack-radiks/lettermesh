import Styled from 'styled-components';

export const Container = Styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 200px;
`;

export const Anchor = Styled.a`
  text-decoration: none;

  &:link {
    text-decoration: none;
  }
`;

export const Body = Styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  z-index: 5;
`;

export const Title = Styled.h3`
  color: white;
  position: relative;
  top: 120px;
  font-size: 22px;
  padding: 0 10px;
  display: block;
  text-decoration: none;
  margin: 0;
`;

export const Author = Styled.h4`
  font-size: 16px;
  color: white;
  padding: 10px;
`;

export const Backdrop = Styled.div`
  position: absolute;
  width: 100%;
  height: 125px;
  z-index: -1;
  top: 75px;
  background-image: linear-gradient(180deg, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.9) 100%);
`;

export const ImageBG = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;

  background-image: url('/static/beach.jpg');
  background-size: cover;
`;
