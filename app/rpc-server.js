const {EventEmitter} = require('events')

class RpcServer extends EventEmitter {
  constructor(app, ctx) {
    super()
    this.app = app
    this.ctx = ctx
  }

  start() {
    // TODO
  }
}

module.exports = RpcServer
