const http = require('http');
const port = 3000;
const fs = require('fs');
const filedata = "Hello to this great world";

const requestHandler = (request, response) => {
  fs.writeFile('hello-world.txt', filedata, (err) => {
  if (err) throw err;
  console.log('File Created Successfuly');
});
  response.end(`Handling a request on port ${port}`)
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});
