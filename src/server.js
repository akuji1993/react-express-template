var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.js');
const baseDir = __dirname;

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// host static files
app.use('/static', express.static(`${baseDir}/static`));

//******** Start REST part
app.get('/halloWelt', (req, res) => res.send("HalloWelt"));

//******** End REST part

app.get('*', (req, res) => {
  res.sendFile(`${baseDir}/index.html`);
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
