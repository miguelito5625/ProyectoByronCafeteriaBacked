var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '35.226.107.150',
  user            : 'desarrollador',
  password        : 'mariobross5625',
  database        : 'comedorbyron',
  multipleStatements: true,
  supportBigNumbers: true,
  bigNumberStrings: true,
});

module.exports = pool;