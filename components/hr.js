import Styled from 'styled-components';
import { space } from 'styled-system';

const Hr = Styled.div`
  ${space};
  // border-top: 1px solid #ccc;
  // border-width: 1px 0 0 0;
  // border-color: #ccc;
  border-top: 1px solid #ccc;
  height: 0;
  width: 100%;
`;

Hr.defaultProps = {
  my: 6,
};

export default Hr;
