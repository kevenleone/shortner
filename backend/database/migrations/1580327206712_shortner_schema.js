'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ShortnerSchema extends Schema {
  up () {
    this.create('shortners', (table) => {
      table.increments();
      table.string('hash_link', 240).notNullable();
      table.string('original_link', 240).notNullable();
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
