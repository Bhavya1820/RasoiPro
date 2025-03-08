const express = require("express");
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
  const { fullName, email, phoneNumber, businessType, services, message } =
    req.body;

  try {
    // Check if required fields are missing
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !businessType ||
      !services.length
    ) {
      return res
        .status(400)
        .json({ error: "All required fields must be filled!" });
    }

    // Check if email already exists
    const existingEmail = await RasoiPro.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Create and save the new form entry
    const newForm = new RasoiPro({
      fullName,
      email,
      phoneNumber,
      businessType,
      services,
      message,
    });

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
