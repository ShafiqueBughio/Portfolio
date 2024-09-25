const { Portfolio_Model } = require("../Model/Hiring_Db");
const nodemailer = require('nodemailer');

// Handler
async function Handle_Form_Submission(req, res) {
    try {
        const { name, email, subject, phone, message } = req.body;
        console.log(req.body);
        // Save user data to the database
        const user = await Portfolio_Model.create({
            name,
            email,
            subject,
            phone,
            message,
        });

        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'shafiquebughio153@gmail.com',
                pass: 'fcjs tdbj pgpf bgoy', // Use app-specific password
            },
        });

        // Set up email data
        const mailOptions = {
            from: email, // Sender address (user's email)
            to: 'shafiquebughio153@gmail.com', // Receiver address (your email)
            subject: `New Contact Request from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Phone:</strong> ${phone}</p>
                   <p><strong>Message:</strong></p>
                   <p>${message}</p>`,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error.message);
                return res.status(500).send('An error occurred while sending email.');
            }

            console.log('Email sent:', info.response);
            return res.status(200).send('Form submitted successfully.');
        });

    } catch (error) {
        console.error('An error occurred:', error.message);
        return res.status(500).send('An internal server error occurred.');
    }
}

module.exports = { Handle_Form_Submission };
