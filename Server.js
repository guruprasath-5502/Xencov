const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoute");

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`DB Connected and Listening to Port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.send("HELLO");
});
app.use("/users", userRoutes);
