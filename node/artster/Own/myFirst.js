const http = require('http')
var dt = require('./myfirstmodule');

exports.myDateTime = function () {
    return Date();
  };

  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
  }).listen(8080);


// http.createServer((rec, res) => {
//     res.writeHead(200, {'success': 'text/html'});
//     res.end(console.log('own'));
// }).listen(8080)

