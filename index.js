'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './lib/legacy',
    './lib/rules/es6',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'script',
  },
};
