const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shadowofleaf96@gmail.com",
      pass: "moni gkld flca zxag",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: email,
    to: "shadowofleaf96@gmail.com",
    subject: "New Contact Form Submission",
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
