const express = require("express");
const connectDB = require("./db");
const Form = require("./form");
var cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors()) 

//API route for form submission
app.post("/submit", async (req, res) => {
  //console.log(req.body)
  const { firstName, lastName, email, phoneNumber, message } = req.body;
  //console.log({ firstName, lastName, email, phoneNumber, message })

  try {

      // Check if email already exists
      const existingEmail = await Form.findOne({ email });
      if (existingEmail) {
          return res.status(400).json({ error: "Email already exists" });
      }

      
      const newForm = new Form({ firstName, lastName, email, phoneNumber, message });
      //console.log(newForm)
      await newForm.save();
      res.status(201).json({ success: "Form submitted successfully!" });
  } catch (error) {
      console.log(error)
      res.status(500).json({error:"database error"});
  }
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`server is listening on ${PORT}`);
});