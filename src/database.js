const mongoose = require( 'mongoose' );
// Cambiar el nombre dependiendo del nombre de la Base de Datos
const URI = 'mongodb://localhost/myDB';

mongoose.connect( URI )
    .then( db => console.log( "La base de datos esta conectada" ) )
    .catch( err => console.log( err ) );

module.exports = mongoose;