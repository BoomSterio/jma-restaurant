module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
        alias: {
          config: './src/config',
        },
      },
    ],
    [
      'formatjs',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        ast: true,
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
}
