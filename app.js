'use strict';

const Hapi = require('hapi');
const routes = require('./routes')

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Start the server
const init = async () => {
    //注册logger插件
    await server.register({
        plugin: require('hapi-pino'),
        options: {
            prettyPrint: true,
            logEvents: ['response']
        }
    });

    //注册静态资源插件
    await server.register(require('inert'));

    // Add the route
    for(let api of routes){
        server.route(api)
    }

    await server.start();
    console.log('Server running at:', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();