const studentModel=require("../models/studentmodels");

exports.createStudent= async(req,res)=>{
    try {
        const student = await studentModel.create(req.body);
        if(!student){
        res.status(400).json({message:`error creating student`})
        }else{
            res.status(200).json({message:`student created successfully`, data:student})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//get all student 

exports.getAll= async(req,res)=>{
    try {
        const student = await studentModel.find(req.body);
        if(!student){
        res.status(400).json({message:`no students available`, data:student})
        }else{
            res.status(200).json({message:`find all students here`, data:student})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//get a student

exports.getAStudent= async(req,res)=>{
    try {
        const studentID= await studentModel.findById(req.params.studentID)
        const student = await studentModel.findById(req.params.studentID);
        if(!student){
        res.status(400).json({message:`no student found`})
        }else{
            res.status(200).json({message:`student ${studentID} has been found`, data:student})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

  

//update a student

exports. updateStudent= async(req,res)=>{
    try {
        const student = await studentModel.findByIdAndUpdate(req.params.studentID, {new:true})

    const studentID= await studentModel.findById(req.params.studentID)
        
        if(!student){
        res.status(400).json({message:` student  ${studentID} not found`})
        }else{
            res.status(200).json({message:`student${studentID} has been found and updated successfully`, data:student})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//delete student

exports. deleteStudent= async(req,res)=>{
    try {
        const student = await studentModel.findByIdAndDelete(req.params.studentID);
        const studentID = await studentModel.findById(req.params.studentID)
        if(!student){
        res.status(400).json({message:`no student with ${studentID} found to delete`})
        }else{
            res.status(200).json({message:`student has been found and deleted `, data:student})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


//do new:true for updating scores

