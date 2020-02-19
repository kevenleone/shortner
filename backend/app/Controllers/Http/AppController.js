
'use strict';

const Job = use('App/Jobs/VisitLookup');
const Shortner = use('App/Models/Shortner');
const Bull = use('Rocketseat/Bull');

class AppController {
  async index ({ request, response }) {
    const { hash } = request.params;
    const headers = request.headers();
    // const ip = request.ip();

    const shortner = await Shortner.findBy('hash_link', hash);
    if (shortner) {
      shortner.hits++;
      await shortner.save();
      Bull.add(Job.key, { headers, shortner });
      return response.redirect(shortner.original_link);
    }
    return 'Hash not found';
  }
}

module.exports = AppController;
