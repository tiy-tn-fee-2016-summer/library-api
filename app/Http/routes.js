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

Route.group('api', () => {
  Route.post('/register', 'UserController.store');

  Route.post('/token-auth', 'SessionController.store');

  Route.get('/user/current', 'UserController.current').middleware('auth');

  Route.resource('/authors', 'AuthorController')
    .only('index', 'show');

  Route.resource('/authors', 'AuthorController')
    .only('store', 'update', 'destroy').middleware('auth');
}).prefix('/api');

Route.group('simple', () => {
  Route.resource('/authors', 'AuthorSimpleController')
    .only('index', 'show');

  Route.resource('/authors', 'AuthorSimpleController')
    .only('store', 'update', 'destroy');
}).prefix('/api');
