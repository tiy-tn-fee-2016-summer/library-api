'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.post('/register', 'UserController.store');

Route.post('/token-auth', 'SessionController.store');

Route.get('/user/current', 'UserController.current').middleware('auth');

Route.resource('/api/authors', 'AuthorController')
  .only('index', 'show');

Route.resource('/api/authors', 'AuthorController')
  .only('store', 'update', 'destroy').middleware('auth');

Route.resource('/api/books', 'BookController')
  .only('index', 'show');

Route.resource('/api/books', 'BookController')
  .only('store', 'update', 'destroy').middleware('auth');

Route.resource('/simple/authors', 'AuthorSimpleController')
  .only('index', 'show');

Route.resource('/simple/authors', 'AuthorSimpleController')
  .only('store', 'update', 'destroy');

Route.resource('/simple/books', 'BookSimpleController')
  .only('index', 'show');

Route.resource('/simple/books', 'BookSimpleController')
  .only('store', 'update', 'destroy');
