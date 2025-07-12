const express = require("express");
const router = express.Router();
const binController = require("../controllers/binController");

router.get("/", binController.getAllBins);
router.get("/:id", binController.getBinById);
router.post("/", binController.createBin);
router.put("/:id", binController.updateBin); // This is key for sensor data updates
router.delete("/:id", binController.deleteBin);

module.exports = router;
