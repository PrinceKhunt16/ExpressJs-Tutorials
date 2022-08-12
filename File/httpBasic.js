const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/'){
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('home page');
    res.end();
  } else if (url === '/about'){
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('about page');
    res.end();
  } else{
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.write('page not found');
    res.end();
  }
});

server.listen(5000);