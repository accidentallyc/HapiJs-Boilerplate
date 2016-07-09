module.exports = function(server){
    // SERVE BOWER FILES
    server.route({
      method: 'GET',
      path: '/assets/lib/{path*}',
      handler: function (request, reply) {
        var path = request.params.path
        reply.file(`./bower_components/${path}`)
      }
    });

}
