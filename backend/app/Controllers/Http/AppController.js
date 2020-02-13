
'use strict';

const Job = use('App/Jobs/VisitLookup');
const Shortner = use('App/Models/Shortner');
const Bull = use('Rocketseat/Bull');
const geoipLite = require('geoip-lite');

class AppController {
  async index ({ request, response }) {
    const { hash } = request.params;
    const headers = request.headers();
    const ip = request.ip();

    const lookup = geoipLite.lookup('186.208.5.225');
    // console.log(lookup);

    const shortner = await Shortner.findBy('hash_link', hash);
    if (shortner) {
      Bull.add(Job.key, { headers, ip: '186.208.5.225', shortner });
      shortner.hits++;
      await shortner.save();
      // return response.redirect(shortner.original_link);
    }
    return 'Hash not found';
  }
}

module.exports = AppController;
