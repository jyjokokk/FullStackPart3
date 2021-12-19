const logger = require('./logger')

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'Unknown endpoint' })
}

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

module.exports = {
  unknownEndpoint,
  errorHandler
}