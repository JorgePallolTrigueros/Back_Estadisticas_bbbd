'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'userapp',
    password : 'User2023_ABC',
    database : 'pelis'
});
 
  
// Conectar a la base de datos
connection.connect(error => {
    if (error) throw error;
    console.log("Conectado exitosamente a la base de datos.");
});

// Función para ejecutar consultas
const query = (sql, callback) => {
    connection.query(sql, (error, results, fields) => {
        if (error) throw error;
        callback(results);
    });
};

// Exportar la función de consulta
module.exports = query;