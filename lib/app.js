const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    console.log(data.toString())
    const request = parseRequest(data.toString());

    if(request.path === '/') {
      socket.end(`HTTP/1.1 200 OK
Content-Type: text/html\r
\r
<html><body><h1>Hi</h1></body></html>`)
    } else if(request.path === '/echo' && request.method === 'POST') {
      socket.end(createResponse(body, contentType, status))
    }
    else {
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  }});
});

module.exports = app;
