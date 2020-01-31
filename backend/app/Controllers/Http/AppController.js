
'use strict';
const geoipLite = require('geoip-lite')
const useragent = require('useragent')
const Shortner = use('App/Models/Shortner');

const browsersList = ["IE", "Firefox", "Chrome", "Opera", "Safari", "Edge"];
const osList = ["Windows", "Mac OS", "Linux", "Android", "iOS"];

const filterInBrowser = agent => item =>
  agent.family.toLowerCase().includes(item.toLocaleLowerCase());
const filterInOs = agent => item =>
  agent.os.family.toLowerCase().includes(item.toLocaleLowerCase());

class AppController {
  async index ({ request, response }) {
    const headers = request.headers();
    console.log(request.headers())
    const ip = request.ip();
    const lookup = geoipLite.lookup('186.208.5.225');
    const agent = useragent.parse(headers["user-agent"]);
    const [browser = "Other"] = browsersList.filter(filterInBrowser(agent));
    const [os = "Other"] = osList.filter(filterInOs(agent));
    console.log({lookup, browser, os, h: headers['useragent']})

    const { hash } = request.params;
    const shortner = await Shortner.findBy('hash_link', hash);
    if (shortner) {
      shortner.hits++;
      await shortner.save();
      // return response.redirect(shortner.original_link);
    }
    return 'Hash not found';
  }
}

module.exports = AppController;
