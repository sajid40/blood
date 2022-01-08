const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = new Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true
    },
    phoneNumber:{
        type:Number
    },
    presentAdress :{
        type:String
    },
    bloodGourp:{
        type:String
    }
})

module.exports=mongoose.model('blood',userSchema);