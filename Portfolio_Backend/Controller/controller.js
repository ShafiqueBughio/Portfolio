const { Portfolio_Model } = require("../Model/Hiring_Db");
// const nodemailer = require('nodemailer');
require('dotenv').config();

// Handler
async function Handle_Form_Submission(req, res) {
    try {
        const { name, email, subject, phone, message } = req.body;
      
        // Save user data to the database
        const user = await Portfolio_Model.create({
            name,
            email,
            subject,
            phone,
            message,
        });

       if(user){
       res.status(200).json("user created");
       }
       else{
        res.status(500).json("user not created");
       }

    } catch (error) {
        console.error('An error occurred:', error.message);
        return res.status(500).send('An internal server error occurred.');
    }
}

async function Handle_Get_Request(req,res){
    res.send("Yes i am shafique");
}

module.exports = { Handle_Form_Submission,Handle_Get_Request };
