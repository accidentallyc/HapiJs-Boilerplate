module.exports = function(server){
  // SERVE ASSETS FILES
  server.route({
    method: 'GET',
    path: '/.tmp/{path*}',
    handler: function (request, reply) {
      var path = request.params.path
      reply.file(`.tmp/${path}`)
    }
  })
}
