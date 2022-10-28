const mongoose=require('mongoose')

const pathSchema=new mongoose.Schema({
    value:{
        type: Number,
        required:true
    },
    path:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("PathChose",pathSchema,"paths")