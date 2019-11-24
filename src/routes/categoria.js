const categoriaRoutes = require('express').Router();
const { categoriaController } = require('../controllers/index');

categoriaRoutes.get('/categorias', categoriaController.obtenerCategorias);

module.exports =  categoriaRoutes;