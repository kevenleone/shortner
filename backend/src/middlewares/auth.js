const jsonwebtoken = require('jsonwebtoken');
const { promisify } = require('util');
const { SECRET_KEY } = process.env;

async function authMiddleware(req, res, next) {
  const { headers: { Authorization } } = req;

  if (!Authorization) {
    throw new Error('User not authorized');
  }

  const [_, token] = Authorization.split(' ').pop();

  try {
    await promisify(jsonwebtoken.verify)(token, SECRET_KEY)
    next();
  } catch (e) {
    throw new Error(e.message);
  }
}