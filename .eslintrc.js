module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: 0,
    endOfLine: 0,
    allowTemplateLiterals: 0,
    'react-native/no-inline-styles': 0,
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'jsx-quotes': ['warn', 'prefer-single'],
    'prettier/prettier': [
      'warn',
      {
        'no-inline-styles': false,
      },
    ],
  },
}
