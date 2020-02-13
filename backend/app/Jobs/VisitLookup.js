'use strict';

const Analytic = use('App/Models/Analytic');
const Region = use('App/Models/Region');

const geoipLite = require('geoip-lite');
const useragent = require('useragent');

const browsersList = ['IE', 'Firefox', 'Chrome', 'Opera', 'Safari', 'Edge'];
const osList = ['Windows', 'Mac OS', 'Linux', 'Android', 'iOS'];

const filterInBrowser = agent => item =>
  agent.family.toLowerCase().includes(item.toLocaleLowerCase());
const filterInOs = agent => item =>
  agent.os.family.toLowerCase().includes(item.toLocaleLowerCase());

class VisiterLookup {
  static get key () {
    return 'VisiterLookup';
  }

  async handle (job) {
    const { headers, ip, shortner } = job.data;
    // const lookup = geoipLite.lookup('186.208.5.225');

    const lookup = geoipLite.lookup(ip);
    const agent = useragent.parse(headers['user-agent']);
    const [browser = 'Other'] = browsersList.filter(filterInBrowser(agent));
    const [os = 'Other'] = osList.filter(filterInOs(agent));

    const { country, city, timezone, region, ll } = lookup || {};
    const [latitude, longitude] = ll || [];

    const analytic = { browser, os, ip, shortner_id: shortner.id };

    // throw new Error(JSON.stringify(lookup));
    if (lookup) {
      const newRegion = await Region.create({ country, region, timezone, city, latitude, longitude });
      analytic.region_id = newRegion.id;
    }
    await Analytic.create(analytic);
  }
}

module.exports = VisiterLookup;
