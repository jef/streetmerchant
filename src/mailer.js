const nodemailer = require("nodemailer");

const emailUsername = process.env.EMAIL_USERNAME;
const emailPassword = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUsername,
    pass: emailPassword,
  },
});

let mailOptions = {
  from: emailUsername,
  to: emailUsername,
  subject: "NVIDIA - BUY NOW",
  text: '',
};

function send(text) {
  mailOptions.text = text; 
  if (emailUsername && emailPassword) {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("email sent: " + info.response);
      }
    });
  }  
}

module.exports = { send }