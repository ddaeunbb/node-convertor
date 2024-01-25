const http = require('http');
const PORT = 8080;
const IP = 'localhost';

const defaultCorsHeader = {
  "Access-Control-Allow-Origin": "*", // '*' 모든 리소스에게 권한 부여
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS", 
  "Access-Control-Allow-Headers": "Content-Type, Accept", 
  "Access-Control-Max-Age": 10,
};

const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(200, defaultCorsHeader);
    res.end();
  }

  if(req.method === 'POST' && req.url === '/upper') {
    let body = [];
    req
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        res.writeHead(201, defaultCorsHeader);
        res.end(body.toUpperCase());
      })
  }
  else if(req.method === 'POST' && req.url === '/lower') {
    let body = [];
    req
      .on("error", (err) => {
        console.error(err);
      })
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        res.writeHead(201, defaultCorsHeader);
        res.end(body.toLowerCase());
      });
  }

})

server.listen(PORT, () => {
  console.log(`Server running at http://${IP}:${PORT}/`)
})
