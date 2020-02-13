module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error', //prettier indicate everything as an error
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'], //just warn if its .jsx or .js file
      },
    ],
    'import/prefer-default-export': 'off', //allow if there's only one export, not be the default
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
        rootPathPrefix: '~/',
      },
    },
  },
};
