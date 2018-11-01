module.exports = {
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-underscore-dangle': [0],
    'import/prefer-default-export': [0],
    'no-console': [0],
    'react/forbid-prop-types': [0],
    'no-param-reassign': [0],
    'import/no-extraneous-dependencies': [0],
    'react/prefer-stateless-function': [0],
    'react/prop-types': [1],
    "react/destructuring-assignment": [1]
  },
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
};