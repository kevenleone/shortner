const uuid = require('uuid/v4');
const Shortner = require('../model/Shortner');

function getShortner() {
  const [short] = uuid().split('-');
  return short;
}

module.exports = {

  async get(req, res) {
    const { params: { id   } } = req;
    const data = await Shortner.findById(id);
    res.json({ data });
  },

  async getall(req, res) { 
    const data = await Shortner.find();
    res.json({data});
  },

  async post(req, res) { 
    const { body: { link } } = req;
    const short = getShortner();
    const shortner = await Shortner.create({ link, short });
    res.json(shortner)
  },

  async put(req, res) {
    const { body: { link }, params: { id } } = req;
    if (!id) {
      res.status(400).json({ message: 'ID not exists' })
      return;
    }
    const short = getShortner();
    const shortner = await Shortner.findOneAndUpdate(id, { link, short, updated_at: Date.now() })
    res.send(shortner)
  },
  
  async delete(req, res) { 
    const { params: { id } } = req;
    const data = await Shortner.findOneAndDelete(id);
    res.json({data});
  },

  async redirect(req, res) {
    const { params: { short } } = req;
    const data = await Shortner.findOne({ short });
    data.hits++;
    await data.save();
    res.redirect(data.link)
  }
}