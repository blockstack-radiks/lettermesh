import Styled from 'styled-components';

export const Icon = Styled.img`
  width: 32px;
  height: 42px;
`;

export const Name = Styled.div`
  font-size: 24px;
  font-weight: bold;
  position: relative;
  text-underline: none;
  top: 0px;
`;

export const SubName = Styled.div`
  font-size: 18px;
  position: relative;
  text-underline: none;
  top: -4px;
`;

export const Container = Styled.a`
  margin: 0px auto;
  :visited {
    color: black;
  }
  :link {
    text-decoration: none;
  }
`;
