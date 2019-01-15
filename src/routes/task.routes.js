const express = require( 'express' );
// Metodo para poder ingresar rutas
const router = express.Router();

// Se declara una ruta inicial que devuelve un mensaje
router.get( '/', ( req, res ) => {
    res.json( {
        status: 'API trabajando'
    } );
} );

module.exports = router;