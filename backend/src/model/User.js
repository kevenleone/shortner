const { model, Schema } = require('mongoose')

const User = new Schema({
  name: String,
  email: String,
  password: String,
  created_at: { type: Date, timestamp: true, default: Date.now }
})

module.exports = model('user', User)
