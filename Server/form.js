const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
  fullName:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber:{
    type: String,
    required: true,
  },
  bussinessType:{
    type: String,
    required: true
  },
  service:{
    type: String,
    required: true,
  },
  message:{
    type: String,
  }
})


const rasoipro = mongoose.model('rasoipro', formSchema)
module.exports = rasoipro