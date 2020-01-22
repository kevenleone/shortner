const { model, Schema } = require('mongoose')

const ShortnerSchema = new Schema({
  link: String,
  short: String,
  hits: { type: Number, default: 0 },
  created_at: { type: Date, timestamp: true, default: Date.now },
  updated_at: { type: Date, timestamp: true, default: Date.now },
}); 

module.exports = model('shortner', ShortnerSchema)