const express = require("express");
const nodemailer = require("nodemailer");
const connectDB = require("./db");
const Form = require("./form");
var cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//API route for form submission
app.post("/submit", async (req, res) => {
  const { fullName, email, phoneNumber, businesstype, services, message } =
    req.body;

  try {
    // Check if required fields are missing
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !businesstype ||
      !Array.isArray(services) ||
      services.length === 0
    ) {
      return res
        .status(400)
        .json({ error: "All required fields must be filled!" });
    }

    // Check if email already exists
    const existingEmail = await Form.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Create and save the new form entry
    const newForm = new Form({
      fullName,
      email,
      phoneNumber,
      businessType: businesstype, // Ensure consistency in field naming
      services,
      message,
    });

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      // service: "gmail",
      host: process.env.SMTP,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.ADMIN_EMAIL, // Your email
        pass: process.env.ADMIN_EMAIL_PASSWORD, // Use the App Password
      },
      
    });

    // Email to admin
    const adminMailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL, // Admin email
      subject: "New Contact Inquiry",
      html: `
          <h3>New Contact Inquiry</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Business Type:</strong> ${businesstype}</p>
          <p><strong>Services:</strong> ${services}</p>
          <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Email to client
    const clientMailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: "Thank You for Contacting Us",
      html: `
          <h3>Thank You for Reaching Out</h3>
          <p>Dear ${fullName},</p>
          <p>Thank you for getting in touch! We appreciate your interest and will get back to you soon.</p>
          <p>Best regards,<br>Your Company</p>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(clientMailOptions);

    await newForm.save();
    res.status(201).json({ success: "Form submitted successfully!" });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`server is listening on ${PORT}`);
});
