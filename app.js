var ApiServer = require('apiserver');

// Modules
var DribbbleModule      = require('./module/dribbble');

// init
var API = new ApiServer();

// config
API.use(ApiServer.payloadParser());
API.addModule('v1', 'DribbbleModule', DribbbleModule);

API.router.addRoutes([
    ['/dribbble/likes/?', 'v1/DribbbleModule#likes']
]);

// run
API.listen(process.env.VCAP_APP_PORT || 3000, function () {
    console.log('listening');
});