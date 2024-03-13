const { Router } = require("express");
const getAllProduts = require("../controllers/getAllProduts.js");

const router = Router();

router.get("/", (req, res) => {
  const data = getAllProduts();

  res.json(data);
});

router.get("/:id", (req, res) => {
  res.send("get all products");
});

module.exports = router;
