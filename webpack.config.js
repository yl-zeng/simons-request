var path = require("path");
var webpack = require("webpack");

module.exports ={
  entry: [
    "script!jquery/dist/jquery.min.js",
    "script!bootstrap/dist/js/bootstrap.min.js",
    "./app/app.jsx"],
  externals:{
    jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery',
    })
  ],
  output:{
    path:__dirname,
    filename:"./public/bundle.js"
  },
  resolve:{
    root:path.resolve(__dirname),
    modulesDirectories:[
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias:{

    },
    extensions:['','.js','.jsx']
  },
  module:{
    loaders:[{
      loader:'babel-loader',
      query:{
        presets:['react','es2015','stage-0']
      },
      test:/\.jsx?$/,
      exclude:/(node-modules|bower_components)/
    },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&minetype=application/font-woff'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader!'
        }]
  }
};
