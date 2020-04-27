const mongoose = require('mongoose')

const schema =  mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  
})

const User = mongoose.model('test', schema)

module.exports = User