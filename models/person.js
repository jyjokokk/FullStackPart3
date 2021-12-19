const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

console.log(`Connecting to ${url}...`);
mongoose.connect(url)
  .then(result => {
    console.log('Successfully connected to MongoDB!');
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB: ${error}`);
  })


const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  number: {
    type: String,
    minlength: 8,
    required: true
  }
})

personSchema.plugin(uniqueValidator)

const Person = mongoose.model('Person', personSchema)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)
