module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    quotes: ['warn', 'single'],
    semi: 0,
    endOfLine: 0,
    allowTemplateLiterals: 0,
    'react-native/no-inline-styles': 0,
    'react-hooks/exhaustive-deps': 1,
    '@typescript-eslint/no-unused-vars': 1,
    'prettier/prettier': 1,
  },
}
