var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 1337, host: 'localhost' });

server.start(function () {
    console.log('Server up and running at:', server.info.uri);
});
