const { response } = require('express')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

morgan.token('body', (req, res) => JSON.stringify(req.body))

app.use(express.json())
app.use(express.static('build'))
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
	{
		name: 'Arto Hellas',
		number: '040-123456',
		id: 1
	},
	{
		name: 'Ada Lovelace',
		number: '39-44-5323523',
		id: 2
	},
	{
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
		id: 3
	}
]

const generateId = (min, max) => {
	let id = Math.floor(Math.random() * (max - min) + min)
	return id
}

app.get('/info', (req, res) => {
	const message = `Phonebook has info of ${persons.length} people.
                  <br></br>
                  ${new Date()}`
	res.send(message)
})

app.get('/api/persons', (req, res) => {
	res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	const person = persons.find((person) => person.id === id)

	if (person) {
		res.json(person)
	} else {
		res.status(404).end()
	}
})

app.delete('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	persons = persons.filter((person) => person.id !== id)
	res.status(204).end()
})

app.post('/api/persons', (req, res) => {
	const body = req.body
	if (!body.name || !body.number) {
		return res.status(400).json({
			error: 'Request must contain name and number.'
		})
	}
	if (persons.find((person) => person.name === body.name)) {
		return res.status(409).json({
			error: 'Duplicate data item'
		})
	}
	const person = {
		name: body.name,
		number: body.number || '',
		id: generateId(4, 120)
	}
	persons = persons.concat(person)
	res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`)
})
