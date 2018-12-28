const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArticuloSchema = new Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    pie1: { type: String, required:true },
    pie2: {type:String, required:true}
});

module.exports = mongoose.model('Articulo', ArticuloSchema);
