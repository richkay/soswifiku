/* eslint-disable no-path-concat */
const fs = require('fs')
const https = require('https')
const express = require('express')
const cors = require('cors')
// const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use('/api', require('./model/venues'))
  app.use('/api', require('./model/privacy'))
  app.use(cors())
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  // app.listen(3001, host)
  // consola.ready({
  //   message: `Server listening on htt p://${host}:${port}`,
  //   badge: true
  // })

  const httpsOptions = {
    key: fs.readFileSync(__dirname + '/key.pem'),
    cert: fs.readFileSync(__dirname + '/cert.pem')
  }
  https.createServer(httpsOptions, app).listen(port, () => {
    console.log(`Server listening on https://${host}:${port}`)
  })
}
start()
