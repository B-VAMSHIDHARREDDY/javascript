// Write a node.js program for making external http calls.

var http = require('http');
http.request({
host: 'www.google.com',
method: 'GET',
path: "/"
}, function(response) {
response.setEncoding("utf8");
response.on("readable", function() {
console.log(response.read())
});
}).end();
