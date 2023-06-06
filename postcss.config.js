module.exports = {
    plugins: [
      require('postcss-modules')({
        getJSON: function () {
          // This function is needed to prevent the creation of .json files
        },
        generateScopedName: '[name]__[local]___[hash:base64:5]' // Customize the generated class names if desired
      }),
      require('cssnano')()
    ]
  };
  