'use strict';

const Schema = use('Schema');

class BookSchema extends Schema {

  up() {
    this.create('books', (table) => {
      table.increments();
      table.string('title');
      table.integer('year');
      table.boolean('is_digital');
      table.integer('author_id').references('authors.id');
      table.timestamps();
    });
  }

  down() {
    this.drop('books');
  }

}

module.exports = BookSchema;
