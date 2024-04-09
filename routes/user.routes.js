const { Router } = require("express");

const { registerUser, loginUser } = require("../controllers/registerUser");
// Post user
const router = Router();

router.post("/", async (req, res) => {
  try {
    const data = await registerUser(req.body);

    res.status(201).json(data);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

// Post user login

router.post("/login", async (req, res) => {
  try {
    const data = await loginUser(req.body);

    res.status(201).json(user);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
