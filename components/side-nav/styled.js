import Styled, { css } from 'styled-components';
import { Flex, Box } from 'blockstack-ui';

export const Container = Styled(Flex)`
  min-height: 100vh;
  width: 300px;
  z-index: 100;
  overflow-y: scroll;
  border-left: 1px solid #ccc;
  box-shadow: -4px 0 6px -4px #ccc;
  position: fixed;
  right: 0;
  top: 0;
  background: white;
  transition: .34s transform cubic-bezier(.19,1,.22,1);
  // display: ${({ open }) => (open ? 'block' : 'none')}
  transform: translate(${({ open }) => (open ? 0 : '100%')});
`;

Container.defaultProps = {
  flexWrap: 'wrap',
  flexDirection: 'column',
};

export const Item = Styled(Box)`
  align-self: start;

  a {
    color: black;
    text-decoration: none;
  }

  ${({ hover = true }) => (
    hover && css`
      &:hover {
        background: #f2f2f2;
      }
    `
  )}

  svg {
    cursor: pointer;
  }
`;

Item.defaultProps = {
  px: 4,
  py: 3,
  width: 1,
};

export const Label = Styled(Item)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textGray};

  &:hover {
    background: none;
  }
`;

Label.defaultProps = {
  ...Item.defaultProps,
};

export const Divider = Styled(Box)`
  border-top: 1px solid #ddd;
`;

Divider.defaultProps = {
  mx: 0,
  my: 3,
};
