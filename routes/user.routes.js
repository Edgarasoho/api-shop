const { Router } = require("express");
const { model } = require("mongoose");
const registerUser = require("../controllers/registerUser");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const data = await registerUser();

    res.json(data);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
