'use strict'

const Shortner = use('App/Models/Shortner');

class AppController {
  async index({ request, response }) {
    const { hash } = request.params;
    const shortner = await Shortner.findBy('hash_link', hash);
    if (shortner) {
      shortner.hits++;
      await shortner.save();
      return response.redirect(shortner.original_link);
    }
    return 'Hash not found';
  }
}

module.exports = AppController
