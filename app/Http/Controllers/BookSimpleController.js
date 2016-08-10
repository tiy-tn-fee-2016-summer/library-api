'use strict';

const Book = use('App/Model/Book');
const attributes = [
  'title',
  'year',
  'is_digital',
  'author_id',
];

class BookSimpleController {

  * index(request, response) {
    const books = yield Book.with('author').fetch();

    response.json(books);
  }

  * store(request, response) {
    const bookParams = request.jsonApi.getAttributesSnakeCase(attributes);

    const book = yield Book.create(Object.assign({}, bookParams));
    response.json(book);
  }

  * show(request, response) {
    const id = request.param('id');

    const book = yield Book.with('author').where({ id }).firstOrFail();
    response.json(book);
  }

  * update(request, response) {
    const bookParams = request.jsonApi.getAttributesSnakeCase(attributes);
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const book = yield Book.with('author').where({ id }).firstOrFail();
    yield book.update(bookParams);

    response.json(book);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const book = yield Book.query().where({ id }).firstOrFail();
    yield book.delete();

    response.status(204).send();
  }

}

module.exports = BookSimpleController;
