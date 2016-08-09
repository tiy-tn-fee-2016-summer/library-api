'use strict';

const Author = use('App/Model/Author');
const attributes = ['first-name', 'last-name'];

class AuthorController {

  * index(request, response) {
    const authors = yield Author.with('works').fetch();

    response.jsonApi('Author', authors);
  }

  * store(request, response) {
    const authorParams = request.jsonApi.getAttributesCamelCase(attributes);

    const author = yield Author.create(Object.assign({}, authorParams));
    response.jsonApi('Author', author);
  }

  * show(request, response) {
    const id = request.param('id');

    const author = yield Author.with('works').where({ id }).firstOrFail();
    response.jsonApi('Author', author);
  }

  * update(request, response) {
    const authorParams = request.jsonApi.getAttributesCamelCase(attributes);
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const author = yield Author.with('works').where({ id }).firstOrFail();
    yield author.update(authorParams);

    response.jsonApi('Author', author);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const author = yield Author.query().where({ id }).firstOrFail();
    yield author.delete();

    response.status(204).send();
  }

}

module.exports = AuthorController;
