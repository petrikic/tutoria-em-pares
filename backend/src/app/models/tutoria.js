const mongoose = require('mongoose')
const dateFormatter = require('date-formatter-util')



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
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
},
data : {
    type: Date,
    default: Date.now(),
},
status: {
  type: String,
  default: 'Aguardando'
}
});



const Tutoria = mongoose.model("Tutoria" , TutoriaSchema)

module.exports = Tutoria;















