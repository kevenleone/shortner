'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AnalyticsSchema extends Schema {
  up () {
    this.create('analytics', (table) => {
      table.increments();
      table.string('os', 50).notNullable();
      table.string('browser', 150).notNullable();
      table.string('ip', 20).notNullable();
      table
        .integer('region_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('regions')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('shortner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('shortners')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down () {
    this.drop('analytics');
  }
}

module.exports = AnalyticsSchema;
