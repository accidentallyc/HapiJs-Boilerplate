module.exports = function(server){
  // Get all controllers and then initialize them
  controllers = require('require-dir')(`../api/controller`)
  for( k in controllers){
    c = controllers[k]

    if(typeof c != 'undefined'){
      c.path    = c.path    || `/${sanitizeRoute(k)}`
      c.method  = c.method  || ['GET','POST']
      c.handler = c.handler || ((request, reply)=> reply(`Empty controller found at ${k}`))
      server.route(c)
    }

  }
}

function sanitizeRoute(route){
  route = route.toLowerCase()
  var i = route.indexOf("controller")
  i > -1 && (route = route.substr(0,i))

  return route
}
