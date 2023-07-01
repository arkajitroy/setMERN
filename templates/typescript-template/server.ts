const express = require("express");
const cors = require("cors");
const connectMongoDB = require("./config/database.config");
const { errorHandler } = require("./api/middlewares/error.middleware");
require("dotenv").config({ path: "./src/config.env" });

// constants
const app = express();
const PORT = process.env.PORT;
const MONGOURI = process.env.MONGO_URI;

// middleware and other
app.use(cors());
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// route
app.use("/api", require("./api/routes/index.js"));

// port listening
app.listen(PORT, () => {
  connectMongoDB(MONGOURI);
  console.log(`✔️  Server is running on PORT ${PORT}`);
});
