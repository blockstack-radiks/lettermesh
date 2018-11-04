import Styled from 'styled-components';
import { space } from 'styled-system';

export const Table = Styled.table`
  ${space};
  width: 100%;
  border-collapse: collapse;
`;

export const Th = Styled.th`
  text-align: left;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 20px;

  &:first-child {
    border-radius: 3px 0 0 0;
  }

  &:last-child {
    border-right: 1px solid #ccc;
  }
`;

export const Td = Styled(Th)`
  border-top: none;
`;

Td.defaultProps = {
  as: 'td',
};
