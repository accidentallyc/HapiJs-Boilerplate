/**
* Declare the tempate engine
* @param {Object} Instance of hapi server
*/
module.exports = function (server){
  server.views({
      engines: { 'jade': require('jade')   },
      relativeTo: __dirname,
      path: '../templates'
  });
}
