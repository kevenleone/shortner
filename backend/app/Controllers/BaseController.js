class Base {
  sendResponse({response, status = 200, message = '', data = {}}) {
    response.status(status).send({
      message,
      data
    });
  }
}

module.exports = Base;