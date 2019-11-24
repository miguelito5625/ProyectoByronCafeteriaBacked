const platillosRoutes = require('express').Router();
const { platilloController } = require('../controllers/index');

platillosRoutes.get('/', platilloController.saludo);
platillosRoutes.get('/platillos', platilloController.obternerPlatillos);
platillosRoutes.post('/platillos', platilloController.guardarPlatillo);

module.exports = platillosRoutes;