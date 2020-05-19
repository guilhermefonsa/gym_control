// Dependecias
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

// variaveis
const server = express()


// Chamadas de dependencias
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.listen(5000, function () {
  console.log("server is running")
})