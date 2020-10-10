const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Student = new Schema({
  student_name: { type: String, required: [true, 'El nombre es necesario'] }, // nombre del estudiante
  student_app: { type: String, required: [true, 'El apellido paterno es necesario'] }, // app del estudiante
  student_apm: { type: String, required: [true, 'El apellido materno es necesario'] }, // apm del estudiante
  student_dni: { type: String, required: [true, 'La matricula es necesaria'] }, // matricula de estudiante
  teacher: { type: String, required: [true, 'La matricula es necesaria'] },//Id del profesor
  //teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },//Id del profesor

  }, {
  collection: 'students'
})

module.exports = mongoose.model('Student', Student)

