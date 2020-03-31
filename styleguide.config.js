const path = require('path');

module.exports = {
  components: "./src/components/**/*.tsx",
  ignore: ["./src/components/Layout.tsx"],
  propsParser: require("react-docgen-typescript").parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/ThemeWrapper')
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx/,
          loader: "babel-loader",
          exclude: /node_modules/
        }
      ]
    }
  },
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Roboto, Arial, sans-serif'
      }
    }
  }
};
