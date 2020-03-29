const { Router } = require('express');
const devController = require('./controllers/devcontroller')
const searchController = require('./controllers/searchcontroller')



const routes = Router();

routes.get('/devs', devController.index );
routes.post('/devs', devController.store );

routes.get('/search', searchController.index );

module.exports = routes;