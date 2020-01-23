const jsonwebtoken = require('jsonwebtoken');
const { promisify } = require('util');
const UserModel = require('../model/User');

module.exports = {
  async login(req, res) {
    const { SECRET_KEY } = process.env;
    const { body: { email, password } } = req;
    let user = await UserModel.findOne({ email }).lean();
    if (!user) {
      res.status(400).json({ message: 'Email not exists' })
      return;
    }

    user = await UserModel.findOne({ email, password }).lean()
    if (!user) {
      res.status(400).json({ message: 'Password invalid' })
      return;
    }

    delete user.password; 
    const token = await promisify(jsonwebtoken.sign)({user}, SECRET_KEY);
    res.json({ token });
  },

  async get(req, res) {
    const { params: { id } } = req;
    const data = await UserModel.findById(id);
    res.json({ data });
  },

  async getall(req, res) { 
    const data = await UserModel.find();
    res.json({data});
  },

  async post(req, res) { 
    const { body } = req;
    const User = await UserModel.create(body);
    res.json(User)
  },

  async put(req, res) {
    const { body, params: { id } } = req;
    if (!id) {
      res.status(400).json({ message: 'ID not exists' })
      return;
    }
    const User = await UserModel.findOneAndUpdate(id, body)
    res.send(User)
  },
  
  async delete(req, res) { 
    const { params: { id } } = req;
    const data = await UserModel.findOneAndDelete(id);
    res.json({data});
  },
}