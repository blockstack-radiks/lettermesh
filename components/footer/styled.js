import Styled from 'styled-components';
import { Flex } from 'blockstack-ui';
import { space } from 'styled-system';

export const Diagonal = Styled.div`
  ${space};
  width: 100%;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: ${({ theme }) => theme.colors.grayBG};
  height: 80px;
`;

export const Container = Styled(Flex)`
  background: ${({ theme }) => theme.colors.grayBG};
`;

Container.defaultProps = {
  py: 8,
  px: 8,
};
