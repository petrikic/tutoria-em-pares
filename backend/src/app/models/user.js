const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
nome: {
    type: String,
    require: true,
},
email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
},
telefone: {
  type: Number,
},
semestre: {
  type: Number,
},
rga: {
  type: String,
},
admin: {
  type: Boolean,
  default: false,
},
profile: {
  type: String,
},
password: {
    type: String,
    require: true,
    select: false,
},
passwordResetToken: {
    type: String,
    select: false
},
passwordResetExpires: {
    type: Date,
    select: false
},
data : {
    type: Date,
    default: Date.now(),
},
});


UserSchema.pre('save', async function(next){
    var salt = bcrypt.genSaltSync(10);
    var savePassword = bcrypt.hashSync(this.password, salt);
    this.password = savePassword;
})
const User = mongoose.model("User" , UserSchema)

module.exports = User;















