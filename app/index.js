const connect = require('connect')
const conf = require('config')
const RpcServer = require('app/rpc-server')

const app = connect()

const context = {}

module.exports.init = () => {
  console.log('run app start')
  context.conf = conf
  context.rpcMethods = {}
}

module.exports.start = () => {
  console.log('start server')

  new RpcServer(app, context)

  app.listen(context.conf.rpcPort, () => {
    console.info(`server start at ${context.conf.rpcPort}`)
  })
}
