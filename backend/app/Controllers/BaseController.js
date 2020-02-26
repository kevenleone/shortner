const constants = require('../../utils/constants')
class Base {

  constructor() {
    this.constants = constants;
  }

  sendResponse({response, status = 200, message = '', data = {}}) {
    response.status(status).send({
      message,
      data
    });
  }
}

module.exports = Base;