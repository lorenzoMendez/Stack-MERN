
// Primero se ejecuta el servidor
const express = require( 'express' );
const app = express();

/// CONFIGURACIONES
// Pide un puerto al sistema operativo
app.set( 'port', process.env.PORT || 3000 );

/// MIDDLEWARE

/// ROUTES

/// Archivos estaticos

// Inicia servidor
app.listen( app.get( 'port' ), () => {
    console.log( `Servidor en el puerto ${app.get( 'port' )}` );
});