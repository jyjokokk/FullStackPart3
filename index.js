require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const Person = require('./models/person')
const { response } = require('express')

morgan.token('body', (req, res) => JSON.stringify(req.body))

app.use(express.json())
app.use(express.static('build'))
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/info', (req, res) => {
	const message = `Phonebook has info of ${persons.length} people.
                  <br></br>
                  ${new Date()}`
	res.send(message)
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons)
  })
})

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id).then(person => {
    res.json(person)
  })
})

app.delete('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	persons = persons.filter((person) => person.id !== id)
	res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body
  console.log(body.name + " " + body.number)
	if (!body.name || !body.number) {
		return res.status(400).json({
			error: 'Request must contain name and number.'
		})
	}
  const person = new Person({
    name: body.name,
    number: body.number
  })
  person.save().then(savedPerson => {
    res.json(savedPerson)
  })
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'Unknown endpoint!'})
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`)
})
