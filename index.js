'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-react-app',
    './lib/legacy',
    './lib/rules/es6',
    './lib/rules/es8',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'script',
  },
};
