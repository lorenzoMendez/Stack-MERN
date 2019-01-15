const express = require( 'express' );
// Metodo para poder ingresar rutas
const router = express.Router();

const Task = require( '../models/task' );

// Se declara una ruta inicial que devuelve un mensaje
router.get( '/', ( req, res ) => {
    Task.find( function( err, tasks ) {
        console.log( tasks );
    } );
    res.json( {
        status: 'API trabajando'
    } );
} );

module.exports = router;