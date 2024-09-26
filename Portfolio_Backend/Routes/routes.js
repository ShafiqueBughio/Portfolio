const express = require("express");

const router = express.Router();
const {Handle_Form_Submission, Handle_Get_Request} = require("../Controller/controller")
 
router.post("/hire",Handle_Form_Submission);
router.get("/",Handle_Get_Request);

module.exports = router;
