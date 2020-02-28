'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const uuid = require('uuid/v4');
const BaseController = require('../BaseController');

const Shortner = use('App/Models/Shortner');

/**
 * Resourceful controller for interacting with shortners
 */
class ShortnerController extends BaseController {
  /**
   * Show a list of all shortners.
   * GET shortners
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, auth, response, view }) {
    const shortners = await Shortner
      .query()
      .where('user_id', auth.user.id)
      .fetch();
    return { shortners };
  }

  /**
   * Create/save a new shortner.
   * POST shortners
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.only(['url', 'active', 'hits_limit', 'expires_in', 'not_available_in']);
    const [hash] = uuid().split('-');
    const not_available_in = JSON.stringify(data.not_available_in);
    const shortner = await Shortner.create({
      user_id: auth.user.id,
      ...data,
      not_available_in,
      hits: 0,
      hash,
    });

    this.sendResponse({ response, data: shortner, message: this.constants.SHORTNER_CREATED_SUCCESS })
  }

  /**
   * Display a single shortner.
   * GET shortners/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const shortner = await Shortner.findOrFail(params.id);
    return shortner;
  }

  /**
   * Update shortner details.
   * PUT or PATCH shortners/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const shortner = await Shortner.findOrFail(params.id);
    const active = request.only(['active']);
    shortner.active = active;
    await shortner.save();
  }

  /**
   * Delete a shortner with id.
   * DELETE shortners/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response, auth }) {
    const shortner = await Shortner.findOrFail(params.id);
    if (shortner.user_id !== auth.user.id) {
      return response.status(401);
    }
    await shortner.delete();
    this.sendResponse({ response, message: this.constants.SHORTNER_DELETED_SUCCESS });
  }
}

module.exports = ShortnerController;
