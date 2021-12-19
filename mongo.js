const mongoose = require('mongoose')

if (process.argv.length < 3)
{
  console.log('Password needed as an argument.')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://jko-mongo:${password}@cluster0.uyst6.mongodb.net/phonebook?retryWrites=true`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5)
{
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })
  person.save().then((response) => {
    console.log(`Added ${response.name} number ${response.number} to the phonebook.`)
    mongoose.connection.close()
  })
}

if (process.argv.length === 3)
{
  Person.find({}).then((result) => {
    console.log('Phonebook:')
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}
