class UserRegisterEmail {
  static get key () {
    return 'UserRegisterEmail';
  }

  async handle (job) {
    const { data } = job; // the 'data' variable has user data
    return data;
  }
}

module.exports = UserRegisterEmail;
