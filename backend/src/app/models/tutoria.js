const mongoose = require('mongoose')


const TutoriaSchema = new mongoose.Schema({
institution: {
  type: String,
  required: true,
},
discipline: {
  type: String,
  required: true,
},
content: {
  type: String,
  required: true,
},
status: {
  type: String,
  default: "Aguardando"
},
iframe: {
  type: String
},
tutor: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
},
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
},
data : {
    type: Date,
    default: Date.now(),
},
});



const Tutoria = mongoose.model("Tutoria" , TutoriaSchema)

module.exports = Tutoria;















