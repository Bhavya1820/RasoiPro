const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"], // Custom error message
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required"],
      trim: true,
      match: [/^\d{10}$/, "Phone number must be exactly 10 digits"],
    },
    businessType: {
      type: String,
      required: [true, "Business Type is required"],
      trim: true,
      enum: ["hotel", "motel", "restaurant", "store"],
    },
    services: {
      type: [String],
      required: [true, "At least one service must be selected"],
    },
    message: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const RasoiPro = mongoose.model("RasoiPro", formSchema);
module.exports = RasoiPro;
