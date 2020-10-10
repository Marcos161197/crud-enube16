const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Teacher = new Schema({
  teacher_name: { type: String, required: [true, 'El nombre es necesario'] }, // nombre del profesor
  teacher_app: { type: String, required: [true, 'El apellido paterno es necesario'] }, // app del profesor
  teacher_apm: { type: String, required: [true, 'El apellido materno es necesario'] }, // apm del profesor
  teacher_dni: { type: String, required: [true, 'La matricula es necesaria'] }, // matricula de profesor

  }, {
  collection: 'teacher'
})

module.exports = mongoose.model('Teacher', Teacher)
