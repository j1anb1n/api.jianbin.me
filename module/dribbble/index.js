var http = require('http');

module.exports = {
    likes: {
        get: function (request, response) {
            var options = {
                host: 'api.dribbble.com',
                port: 80,
                path: '/players/j1anb1n/shots/likes',
                method: 'GET'
            };

            var req = http.get(options, function(res) {
                var data = "";
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    data += chunk;
                });

                res.on('end', function(){
                    response.end(data);
                });
            });
            req.end();
        }
    }
}