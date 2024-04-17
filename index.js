require('dotenv').config();

const PORT = process.env.PORT;
const express = require("express");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
const routes = require("./routes/routes");
app.use('', routes);

// import the connectDB
const { connectDB } = require('./config/connection');


// SERVER Starting
const serverStart = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Server is not starting:", error);
  }
}
// calling server
serverStart();


