const express = require("express");

const router = express.Router();
const {Handle_Form_Submission} = require("../Controller/controller")
 
router.post("/hire",Handle_Form_Submission);

module.exports = router;
