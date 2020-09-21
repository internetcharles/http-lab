const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    console.log(data.toString())
    const request = parseRequest(data.toString());

    if(request.path === '/') {
      socket.end(createResponse({ body: '<html><body><h1>Hi!</h1></body></html>', status: '200 OK', contentType: 'text/html' }))
    } else if(request.path === '/echo' && request.method === 'POST') {
      socket.end(createResponse(body, contentType, status))
    } else if(request.path === '/red' && request.method === 'GET') {
      socket.end(createResponse({ body: '<html><body><h1>red</h1></body></html>', status: '200 OK', contentType: 'text/html' }))
    } else if(request.path === '/green' && request.method === 'GET') {
      socket.end(createResponse({ body: '<html><body><h1>green</h1></body></html>', status: '200 OK', contentType: 'text/html' }))
    } else if(request.path === '/blue' && request.method === 'GET') {
      socket.end(createResponse({ body: '<html><body><h1>blue</h1></body></html>', status: '200 OK', contentType: 'text/html' }))
    }
    else {
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  }});
});

module.exports = app;
