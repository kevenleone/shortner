'use strict';

const User = use('App/Models/User');
const BaseController = require('../BaseController')

class AuthController extends BaseController {
  constructor() {
    super();
  }

  async register ({ request, response }) {
    const data = request.only(['username', 'organization', 'email', 'password']);

    try {
      const user = await User.create(data);
      return user;
    } catch (e) {
      this.sendResponse({response, data, status: 400, message: 'USER_ALREADY_EXISTS'})
    }
  }

  async authenticate ({ request, response, auth }) {
    const { email, password } = request.all();
    try {
      const token = await auth.attempt(email, password);

      const loggedUser = await User.findBy('email', email);
      const user = { ...loggedUser.$attributes };
      delete user.password;
  
      const data = {
        token,
        user
      }

      this.sendResponse({ response, data, message });
    } catch (e) {
      this.sendResponse({ response, status: 400, message: `User not exists` });
    }
  }
}

module.exports = AuthController;
