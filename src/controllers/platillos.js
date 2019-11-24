const pool = require('../mysql/db');
const cloudinary = require('cloudinary');
const fs = require('fs-extra');

cloudinary.config({
    cloud_name: 'dslkqmdw8',
    api_key: '768459873675373',
    api_secret: 'XB-oQSYwRAQCy86XusAIddX96jY'
});

const platilloController = {};

platilloController.saludo = (req, res) => {
    res.send('Hola que hace');
};

platilloController.obternerPlatillos = (req, res) => {

    pool.getConnection(function (err, connection) {
        if (err) {
            console.log('error al intentar conectar a la BD');
            res.json('error de conexion a la bd');
            return;
        }

        // Use the connection
        connection.query('SELECT * from platillo', function (error, results, fields) {
            // When done with the connection, release it.
            // connection.release();

            connection.destroy();

            // Handle error after the release.
            if (error) {
                console.log('error en la consulta sql');
                res.json('error de sintaxis SQL')
                return;
            };
            console.log('platillos enviados');
            res.json(results);

            // Don't use the connection here, it has been returned to the pool.
        });
    });

    // pool.query('SELECT * from platillo;', (error, results, fields) => {
    //     if (error) throw error;
    //     console.log('usuarios enviados');
    //     console.log(results);
    //     res.send(results);
    //   });

};

platilloController.guardarPlatillo = async(req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.json('ok');

    // const resultCD = await cloudinary.v2.uploader.upload(req.file.path);
    // await fs.unlink(req.file.path);
    // // console.log(resultCD.secure_url);
    // const data = {
    //     nombre: req.body.nombre,
    //     descripcion: req.body.descripcion,
    //     precio: req.body.precio,
    //     imagen: resultCD.secure_url,
    //     id_categoria: req.body.id_categoria
    // };
    // // console.log(data);

    // await pool.getConnection(function (err, connection) {
    //     if (err) {
    //         console.log('error al intentar conectar a la BD');
    //         res.json('error');
    //         return;
    //     }

    //     // Use the connection
    //     connection.query('INSERT INTO platillo set ?', data,(error, results, fields) => {
    //         // When done with the connection, release it.
    //         // connection.release();

    //         connection.destroy();

    //         // Handle error after the release.
    //         if (error) {
    //             console.log('error en la consulta sql');
    //             // console.log(error);
    //             res.json('error');
    //             return;
    //         };

    //         // Don't use the connection here, it has been returned to the pool.
    //     });
    // });

    // console.log('platillo guardado');
    // res.json('ok');
};

module.exports = platilloController;