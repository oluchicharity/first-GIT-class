const express =require("express");
const {createStudent, getAStudent, updateStudent, deleteStudent, getAll}=require("../controllers/studentcontrollers")

const router = express.Router();
router.post("/create", createStudent)
router.get("/getAll", getAll)
router.get("/getOne/:studentID", getAStudent)
router.put("/update/:studentID", updateStudent)
router.delete("/delete/:studentID", deleteStudent)

module.exports = router;


