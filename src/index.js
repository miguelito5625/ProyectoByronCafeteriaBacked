//Librerias requeridas

const express = require('express');
const listaRutas = require('express-list-endpoints');
const path = require('path');
const multer = require('multer');
const uuid = require('uuid/v4');


//Inicializamos el express
const app = express();

//Configuramos el servidor
app.set('port', process.env.PORT || 3000);
app.use(express.json({ extended: true }));

// app.use(express.urlencoded({extended: false}));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        // console.log(file);
        cb(null, uuid() + path.extname(file.originalname));
    }
}) 
app.use(multer({storage}).single('image'));

//Agregamos las rutas al servidor
app.all("/*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

const routes = require('./routes/index');
app.use('/', routes);

app.use('/public', express.static(path.join(__dirname, 'public')));


//Iniciamos el servidor
app.listen(app.get('port'), () => {
  console.log(listaRutas(app));
  console.log('server on port', app.get('port'));
})