require('dotenv').config();

var app = require('./app/server');

app.listen(4200, function () {
  console.log('server is running');
})