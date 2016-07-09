const LESS = require('less')
const FS = require("fs")
const render_less = Promise.promisify(LESS.render, {context:LESS})
const read_file   = Promise.promisify(FS.readFile, {context:FS})
module.exports = function(server){
  // SERVE ASSETS FILES
  server.route({
    method: 'GET',
    path: '/assets/style/{path*}',
    handler: function (request, reply) {
      var path = request.params.path
      var ext = path.match(/\.\w+$/)
      if(ext){
        ext = ext[0]
        read_file(`${ROOT}/assets/style/${path}`,'utf8')
          .then((src)     => ext=='.less' ? lessToCss(src) : src )
          .then((asset)   => reply(asset).type('text/css') )
          .catch((err)    => reply(`<pre>${JSON.stringify(err,null,2)}</pre>`) )
      }//if ext
      else {
        throw new Error("Could not extract filetype")
      }
    }
  })
}

function lessToCss(src){
  return render_less(src).then((output) => output.css)
}
