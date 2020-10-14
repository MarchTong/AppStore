module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@reducers": "./src/reducers/index",
          "@sagas": "./src/sagas/index",
          "@screens": "./src/screens",
          "@actions": "./src/actions",
          "@types": "./src/configs/types",
          "@constants": "./src/configs/constants",
          "@store": "./src/configs/store",
          "@apiConstants": "./src/configs/apiConstants",
          "@components": "./src/components",
          "@styleConstants": "./src/configs/styleConstants"
        },
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
  ]
};
