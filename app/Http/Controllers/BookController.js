'use strict';

const Book = use('App/Model/Book');
const attributes = [
  'title',
  'year',
  'is_digital',
  'author_id',
];

class BookController {

  * index(request, response) {
    const books = yield Book.with('author').fetch();

    response.jsonApi('Book', books);
  }

  * store(request, response) {
    const bookParams = request.jsonApi.getAttributesSnakeCase(attributes);

    const book = yield Book.create(Object.assign({}, bookParams));
    response.jsonApi('Book', book);
  }

  * show(request, response) {
    const id = request.param('id');

    const book = yield Book.with('works').where({ id }).firstOrFail();
    response.jsonApi('Book', book);
  }

  * update(request, response) {
    const bookParams = request.jsonApi.getAttributesSnakeCase(attributes);
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const book = yield Book.with('works').where({ id }).firstOrFail();
    yield book.update(bookParams);

    response.jsonApi('Book', book);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const book = yield Book.query().where({ id }).firstOrFail();
    yield book.delete();

    response.status(204).send();
  }

}

module.exports = BookController;
