const mongoose = require("mongoose");

const BinSchema = new mongoose.Schema({
  binId: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  fillLevel: {
    type: Number, // Percentage 0-100
    default: 0,
  },
  type: {
    type: String, // e.g., "recycling", "general", "organic"
    required: true,
  },
  lastEmptied: {
    type: Date,
    default: Date.now,
  },
  sensorData: {
    temperature: Number,
    humidity: Number,
    // Add more sensor data fields as needed, like battery level
    batteryLevel: Number, // Example: percentage
  },
  status: {
    type: String, // e.g., "active", "maintenance", "full"
    default: "active",
  },
});

module.exports = mongoose.model("Bin", BinSchema);
