const nodemailer = require("nodemailer")
require("dotenv").config()

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      // secure: false,
      tls: {
        rejectUnauthorized: false
      }
    })

    let info = await transporter.sendMail({
      from: `"Job Board" <${process.env.MAIL_USER}>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
    console.log(info.response)
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }



  // try{
  //   const mailOptions = {
  //     from: 'hitaishi.dagga1@gmail.com',
  //     to: 'hitaishi.dagga2@gmail.com',
  //     subject: 'Hello from Node.js',
  //     text: 'This is a test email sent from a Node.js project using Nodemailer.'
  //   };
    
  //   // Send the email
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.error('Error sending email:', error);
  //     } else {
  //       console.log('Email sent:', info.response);
  //     }
  //   });

  // }catch(e){
  //   console.log("error")
  // }
}

module.exports = mailSender
