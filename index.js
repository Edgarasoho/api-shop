const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/product", require("./routes/producSetterRoutes"));
app.use("/product", require("./routes/productGetterRoutes"));

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URI);
    console.log("data base connected");
  } catch (err) {
    console.log("Error", err.message);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
