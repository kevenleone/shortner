'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class RegionSchema extends Schema {
  up () {
    this.create('regions', (table) => {
      table.increments();
      table.string('country', 50).notNullable();
      table.string('region', 50).notNullable();
      table.string('timezone', 50);
      table.string('city', 50);
      table.decimal('longitude', 9, 6);
      table.decimal('latitude', 9, 6);
      table.timestamps();
    });
  }

  down () {
    this.drop('regions');
  }
}

module.exports = RegionSchema;
