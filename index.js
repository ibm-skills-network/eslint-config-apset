'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'react-app',
    './lib/legacy',
    './lib/rules/es6',
    './lib/rules/es8',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'script',
  },
};
