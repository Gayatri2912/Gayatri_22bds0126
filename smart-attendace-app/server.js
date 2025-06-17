const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Schema & Model
const attendanceSchema = new mongoose.Schema({
  name: String,
  email: String,
  timestamp: { type: Date, default: Date.now }
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.post("/attendance", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  try {
    const entry = new Attendance({ name, email });
    await entry.save();
    res.status(201).json({ message: "Attendance submitted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to save attendance." });
  }
});

app.get("/download", async (req, res) => {
  try {
    const records = await Attendance.find().lean();
    const csv = [
      ["Name", "Email", "Timestamp"],
      ...records.map(r => [r.name, r.email, r.timestamp])
    ].map(row => row.join(",")).join("\n");

    const filePath = path.join(__dirname, "attendance.csv");
    fs.writeFileSync(filePath, csv);

    res.download(filePath, "attendance.csv");
  } catch (err) {
    res.status(500).json({ error: "Error generating CSV." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
