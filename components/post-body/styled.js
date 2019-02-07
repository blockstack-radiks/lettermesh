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
    // text-indent: 1em;
    margin-top: 40px;
  }

  img {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  li:first-child {
    margin-top: 40px;
  }

  li:not(:first-child) {
    margin-top: 10px;
  }

  li {
    list-style-position: outside;
    line-height: 30px;
    font-size: 18px;
  }

  code {
    padding: 0 5px;
    background-color: #e6e6e6;
  }
`;
