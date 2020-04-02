const mongoose = require('mongoose')


const TutorSchema = new mongoose.Schema({
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
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
},
data : {
    type: String,
    required: true,
},
});



const Tutor = mongoose.model("Tutor" , TutorSchema)

module.exports = Tutor;















