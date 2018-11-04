import Styled from 'styled-components';
import { space } from 'styled-system';

export const Container = Styled.div`
  ${space};
  width: 100%;
  background: ${({ theme }) => theme.colors.grayBG};
  box-shadow: 0 6px 6px -4px #ddd;
`;

Container.defaultProps = {
  px: [2, 6],
  py: 4,
};

export const Image = Styled.img`
  max-width: 100%;
`;

export const AuthorImage = Styled.img`
  width: 70px;
  border-radius: 50%;
  box-shadow: 0 0 10px #D4D4D4;
`;
