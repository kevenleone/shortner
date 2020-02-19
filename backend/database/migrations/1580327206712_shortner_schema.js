'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ShortnerSchema extends Schema {
  up () {
    this.create('shortners', (table) => {
      table.increments();
      table.string('hash', 10).notNullable();
      table.string('url', 240).notNullable();
      table.integer('expires_in');
      table.integer('hits_limit').defaultTo(0);
      table.boolean('active').defaultTo(true);
      table.integer('hits').defaultTo(0);
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down () {
    this.drop('shortners');
  }
}

module.exports = ShortnerSchema;
