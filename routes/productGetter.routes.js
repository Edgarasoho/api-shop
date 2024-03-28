const { Router } = require("express");
const { createProduct, getProductById } = require("../controllers");

const router = Router();

// GET /product
router.get("/", async (req, res) => {
  try {
    const data = await createProduct();

    res.json(data);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// GET /product/:id
router.get("/:id", (req, res) => {
  const data = getProductById();

  res.json(data);
});

module.exports = router;
