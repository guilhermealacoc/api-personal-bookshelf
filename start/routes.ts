/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.group(() => {
  Route.post('/create', 'GenresController.store')
  Route.get('/list', 'GenresController.listAll')
  Route.put('/update/:id', 'GenresController.update')
  Route.delete('/delete/:id', 'GenresController.delete')
}).prefix('/genres')

Route.group(() => {
  Route.post('/create', 'AuthorsController.store')
  Route.get('/list', 'AuthorsController.listAll')
  Route.put('/update/:id', 'AuthorsController.update')
}).prefix('/author')

Route.group(() => {
  Route.post('/create', 'PublishersController.store')
  Route.get('/list', 'PublishersController.listAll')
  Route.put('/update/:id', 'PublishersController.update')
}).prefix('/publisher')
