const mongoose = require( 'mongoose' );

const { Schema } = mongoose;

const TaskSchema = new Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    anio: { type: Number, required: false },
    editorial: { type: String, required: false }
});

module.exports = mongoose.model( 'Task', TaskSchema );