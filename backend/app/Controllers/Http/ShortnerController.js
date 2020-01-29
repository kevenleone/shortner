'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const uuid = require('uuid/v4')
const Shortner = use('App/Models/Shortner')

/**
 * Resourceful controller for interacting with shortners
 */
class ShortnerController {
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
    console.log(auth.user.id)
    const shortners = await Shortner
      .query()
      .where('user_id', auth.user.id)
      .fetch();
    return {shortners};
  }

  /**
   * Create/save a new shortner.
   * POST shortners
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only(['original_link']);
    const [hash_link] = uuid().split('-');
    const shortner = await Shortner.create({
      user_id: auth.user.id,
      hash_link,
      ...data
    });
    return shortner;
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
    const active = request.only(['active'])
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
  }
}

module.exports = ShortnerController
