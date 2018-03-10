const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../webpack.config.js');
const baseDir = __dirname;
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/react-express-template', (err) => {
  if (!err) {
    console.log('MongoDB succesfully connected');
  } else {
    console.log('ERROR connecting to MongoDB');
    console.log(err); 
  }
})
const compiler = webpack(config);

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
