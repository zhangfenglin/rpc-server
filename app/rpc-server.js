const {EventEmitter} = require('events')

class RpcServer extends EventEmitter {
  constructor(app, ctx) {
    super()

    console.log('app', app)
  }
}

module.exports = RpcServer
