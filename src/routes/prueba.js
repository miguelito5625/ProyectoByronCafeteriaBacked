const pruebaRoutes = require('express').Router();
const { pruebaController } = require('../controllers/index');

pruebaRoutes.get('/prueba', pruebaController.prueba);

module.exports = pruebaRoutes;