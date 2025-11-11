// Host for proxy
var host = process.env.HOST || '0.0.0.0';

// Port for proxy
var port = process.env.PORT || 8080;

var cors_proxy = require('/usr/local/lib/node_modules/cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [],
    requireHeader: [],
    removeHeaders: []
}).listen(port,host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
})