const express =require("express");
const {createStudent, getAStudent, updateStudent, deleteStudent, getAll}=require("../controllers/studentcontrollers")

const router = express.Router();
router.post("/create", createStudent)
router.get("/getAll", getAll)
router.get("/getOne", getAStudent)
router.put("/update", updateStudent)
router.delete("/delete", deleteStudent)

module.exports = router;


