'use strict';

const Schema = use('Schema');

class AuthorSchema extends Schema {

  up() {
    this.create('authors', (table) => {
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.timestamps();
    });
  }

  down() {
    this.drop('authors');
  }

}

module.exports = AuthorSchema;
