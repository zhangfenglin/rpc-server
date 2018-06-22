const config = require('config')
const app = require('app')

const initApp = () => {
  console.log(config)
  app.init()
  app.start()
}

initApp()
