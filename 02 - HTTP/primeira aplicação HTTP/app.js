const http = require('http');

http.createServer((request, response) => {
    response.end('<h1>Hello Friend</h1>');
  })
  .listen(4000);
console.log('Run!');
