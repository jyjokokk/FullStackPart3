const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const personRouter = require('./controllers/persons')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

morgan.token('body', (response, request) => JSON.stringify(request.body))

app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))



const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'Unknown endpoint' })
}
app.use(unknownEndpoint)


const errorHandler = (error, request, response, next) => {
  logger.error(error.message)
  switch(error.name) {
  case 'CastError':
    return response.status(400).send({ error: 'Malformed id' })
  case 'ValidationError':
    return response.status(400).json({ error:  error.message })
  }
  next(error)
}
app.use(errorHandler)
