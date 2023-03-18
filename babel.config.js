module.exports = {
  presets: [
    ["babel-preset-expo"],
    [
      "module:metro-react-native-babel-preset",
      { useTransformReactJSXExperimental: true },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic",
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
