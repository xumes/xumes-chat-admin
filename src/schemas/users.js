const mongoose = require('mongoose')

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model('User', User);
