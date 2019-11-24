const routes = require('express').Router();

routes.use(require('./platillos'));
routes.use(require('./prueba'));
routes.use(require('./categoria'));

module.exports = routes;