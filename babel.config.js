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
  ],
  presets: ['module:metro-react-native-babel-preset'],
}
