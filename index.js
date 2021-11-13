const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

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
  const person = persons.find(person => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end();
})


const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`)
})
