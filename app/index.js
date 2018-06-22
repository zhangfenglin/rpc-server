const connect = require('connect')
const cors = require('cors')
const jsonParser = require('body-parser').json
const conf = require('config')
const RpcServer = require('app/rpc-server')

const app = connect()

const context = {}

module.exports.init = () => {
  console.log('run app start')
  context.conf = conf
}

module.exports.start = () => {
  console.log('start server')
  app.use(cors())
  app.use(jsonParser())

  const rpcServer = new RpcServer(app, context)
  rpcServer.start()

  app.listen(context.conf.rpcPort, () => {
    console.info(`server start at ${context.conf.rpcPort}`)
  })
}
