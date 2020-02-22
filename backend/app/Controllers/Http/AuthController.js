'use strict';

const User = use('App/Models/User');

class AuthController {
  async register ({ request }) {
    const data = request.only(['username', 'organization', 'email', 'password']);

    const user = await User.create(data);
    return user;
  }

  async authenticate ({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);

    const loggedUser = await User.findBy('email', email);
    const user = { ...loggedUser.$attributes };
    delete user.password;
    return {
      token,
      user
    };
  }
}

module.exports = AuthController;
