// const http = require('http');

// http.createServer(function(request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.write('Hello World!');
//     response.end();
// }).listen(8888);

const http = require('http');

function start() {
    function onRequest(req, res) {
        console.log('Request received.');
        res.writeHead(200, { 'Content-Type': 'text/plan' });
        res.write('Hello World!');
        res.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;