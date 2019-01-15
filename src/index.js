
// Primero se ejecuta el servidor
const express = require( 'express' );
const morgan = require( 'morgan' );
const path = require( 'path' );
const app = express();

/// CONFIGURACIONES
// Pide un puerto al sistema operativo
app.set( 'port', process.env.PORT || 3000 );

/// MIDDLEWARE
// Escucha peticiones del cliente
app.use( morgan( 'dev' ) );
// Intercambiar formatos json
app.use( express.json() );

/// ROUTES
app.use( '/api/task', require( './routes/task.routes' ) );

/// Archivos estaticos
// obtien la ruta del archivo actual
console.log( path.join( __dirname, 'public' ) );
app.use( express.static( path.join( __dirname, 'public' ) ) );

// Inicia servidor
app.listen( app.get( 'port' ), () => {
    console.log( `Servidor en el puerto ${app.get( 'port' )}` );
});