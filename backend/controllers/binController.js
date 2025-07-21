const Bin = require("../models/Bin");

// @desc    Get all bins
// @route   GET /api/bins
// @access  Public
exports.getAllBins = async (req, res) => {
  try {
    const bins = await Bin.find();
    res.json(bins);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Get bin by ID
// @route   GET /api/bins/:id
// @access  Public
exports.getBinById = async (req, res) => {
  try {
    const bin = await Bin.findById(req.params.id);
    if (!bin) {
      return res.status(404).json({ msg: "Bin not found" });
    }
    res.json(bin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Create a new bin
// @route   POST /api/bins
// @access  Public
exports.createBin = async (req, res) => {
  const { binId, location, type, fillLevel, sensorData, status } = req.body;
  try {
    // Check if a bin with this binId already exists
    let bin = await Bin.findOne({ binId });
    if (bin) {
      return res.status(400).json({ msg: "Bin with this ID already exists" });
    }

    const newBin = new Bin({
      binId,
      location,
      fillLevel: fillLevel || 0, // Default to 0 if not provided
      type,
      sensorData,
      status: status || "active", // Default status
    });
    const savedBin = await newBin.save();
    res.status(201).json(savedBin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Update a bin (primarily for sensor data updates)
// @route   PUT /api/bins/:id
// @access  Public
exports.updateBin = async (req, res) => {
  const { location, fillLevel, type, lastEmptied, sensorData, status } =
    req.body;
  try {
    let bin = await Bin.findById(req.params.id);
    if (!bin) {
      return res.status(404).json({ msg: "Bin not found" });
    }

    // Only update fields that are provided in the request body
    if (location) bin.location = location;
    if (fillLevel !== undefined) bin.fillLevel = fillLevel; // Allow 0 to be updated
    if (type) bin.type = type;
    if (lastEmptied) bin.lastEmptied = lastEmptied;
    if (sensorData) bin.sensorData = sensorData;
    if (status) bin.status = status;

    await bin.save();
    res.json(bin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Delete a bin
// @route   DELETE /api/bins/:id
// @access  Public
exports.deleteBin = async (req, res) => {
  try {
    const bin = await Bin.findById(req.params.id);
    if (!bin) {
      return res.status(404).json({ msg: "Bin not found" });
    }
    await Bin.deleteOne({ _id: req.params.id });
    res.json({ msg: "Bin removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
