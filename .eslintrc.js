/**
 * Copyright (c) Ang Lee 2020 (http://anglee.info)
 **/

module.exports = {
  extends: ['react-app', 'react-app/jest'],
  plugins: ['header', 'import'],
  rules: {
    'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 'warn'],
    'header/header': [
      'error',
      'block',
      [
        '*',
        {
          pattern: ' \\* Copyright \\(c\\) Ang Lee \\d{4} \\(http://anglee.info/\\)',
          template: ' * Copyright (c) Ang Lee 2020 (http://anglee.info/)',
        },
        ' *',
      ],
      2,
    ],
    'import/extensions': ['warn', 'never'],
    'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
  },
};
