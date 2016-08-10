'use strict';

const Lucid = use('Lucid');

class Book extends Lucid {
  author() {
    return this.belongsTo('App/Model/Author');
  }
}

module.exports = Book;
