const {EventEmitter} = require('events')
const jayson = require('jayson')

class RpcServer extends EventEmitter {
  constructor(app, ctx) {
    super()
    this.app = app
    this.ctx = ctx
    this.methods = Object.create(null)
    this.server = null
  }

  initMethods() {
    // TODO
    console.log('initMethods', this.methods)
  }

  register(instance) {
    // TODO
    console.log(instance)
  }

  start() {
    // TODO
    this.initMethods()
    this.server = new jayson.Server(this.methods, {
      collect: true,
      params: Array
    })
    this.app.use(this.server.middleware())

    this.server.on('http request', (message) => this.emit('request', message))
    this.server.on('http response', (response) => this.emit('response', response))
    this.server.http().on('error', (error) => this.emit('error', error))
  }
}

module.exports = RpcServer
