const pool = require('../mysql/db');

const categoriaController = {};

categoriaController.obtenerCategorias = (req, res) => {

    pool.getConnection(function (err, connection) {
        if (err) {
            console.log('error al intentar conectar a la BD');
            res.json('error al intentar conectar a la BD');
            return;
        }

        // Use the connection
        connection.query('SELECT * from categoria', function (error, results, fields) {
            // When done with the connection, release it.
            // connection.release();

            connection.destroy();

            // Handle error after the release.
            if (error) {
                console.log('error en la consulta sql');
                res.json('error en la consulta sql');
                return;
            };

            console.log('categorias enviadas');
            res.send(results);

            // Don't use the connection here, it has been returned to the pool.
        });
    });

};


module.exports = categoriaController;