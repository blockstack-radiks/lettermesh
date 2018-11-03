import Styled from 'styled-components';

export const Content = Styled.div`
  hanging-punctuation: first;

  p {
    hanging-punctuation: first;
    font-size: 20px;
    line-height: 30px;
    margin: 0px;
  }

  p + p {
    text-indent: 1em;
    margin-top: 60px;
  }
`;
