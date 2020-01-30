'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments();
      table.string('username', 80).notNullable().unique();
      table.string('email', 254).notNullable().unique();
      table.string('organization', 100);
      table.text('photo', 'longtext');
      table.string('password', 60).notNullable();
      table.timestamps();
    });
  }

  down () {
    this.drop('users');
  }
}

module.exports = UserSchema;
