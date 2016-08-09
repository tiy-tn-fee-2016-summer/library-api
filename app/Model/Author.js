'use strict';

const Lucid = use('Lucid');

class Author extends Lucid {
  works() {
    return this.hasMany('App/Model/Book');
  }
}

module.exports = Author;
