const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { name, email, number, pdfFile, about, jobName } = req.body;
  console.log(name, email, number, pdfFile, about, jobName);

  // Convert the request body to a string
  // const dataString = JSON.stringify(req.body);
  const text = `
  <!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

h3 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

p {
  font-size: 1em;
  margin-bottom: 0.5em;
}

.container {
  width: 500px;
}
</style>
</head>
<body>
<div class="container">
  <h3>Name:</h3> <p>${name}</p><br>
  <h3>Email:</h3> <p>${email}</p><br>
  <h3>Phone Number:</h3> <p>${number}</p><br>
  <h3>Job Name:</h3> <p>${jobName}</p>
  <h3>About:</h3> <p>${about}</p><br>
</div>
</body>
</html>
`;

  let mailOptions = {
    from: process.env.SMTP_MAIL,
    to: "hr@anyquotes.co.uk",
    // to: "delwerhossain006@gmail.com",
    subject: `Jobs Apply ${jobName}`,
    text: `AQ`,
    html: text,
    attachments: [
      {
        filename: `${name}_CV.pdf`,
        path: `${pdfFile}`,
        contentType: "application/pdf",
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res
        .status(500)
        .json({ acknowledged: false, error: "Error sending email" });
    } else {
      console.log("Email sent successfully!");
      res.status(200).json({ acknowledged: true });
    }
  });
});

module.exports = { sendEmail };
