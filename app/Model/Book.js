'use strict';

const Lucid = use('Lucid');

class Book extends Lucid {
  author() {
    return this.hasMany('App/Model/Author');
  }
}

module.exports = Book;
