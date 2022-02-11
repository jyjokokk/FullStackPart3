const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const personRouter = require('./controllers/persons')
const middleware = require('./utils/middleware')
const morgan = require('morgan')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info(`Connecting to ${config.MONGODB_URI}...`)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB!')
  })
  .catch((error) => {
    logger.error(`Error connecting to MongoDB: ${error.message}`)
  })

morgan.token('body', (response, request) => JSON.stringify(request.body))

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.use('/api/persons', personRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app