const path = require('path');
var webpack =  require('webpack')


module.exports = {
  entry: './views/static/index.js',
  
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'views/static/dist')
  },
  
    
    module: {
        loaders: [
            { test: /\.jsx?$/, 
                exclude: /(node_modules|bower_components)/, 
                loader: 'babel-loader',
                query:
                      {
                        presets:["react","es2016"]

                      }
            },
            {
              test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:
                      {
                        presets:["react","es2016"]

                      }

            },


        ]
    },

};
