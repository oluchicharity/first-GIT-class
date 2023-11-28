const mongoose = require("mongoose");

const studentSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    stack:{
        type:String,
        required:true
        
    },

    score:{
        html:{
        type:Number,
        new:true
        },
        javascript:{
            type:Number,
            new:true
        },
        css:{
            type:Number,
            new:true
        },
        node:{
            type:Number,
            new:true
        },
    }

},{timestamps:true})

const studentModel= mongoose.model("students",studentSchema)

module.exports= studentModel


