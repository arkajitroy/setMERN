const express = require("express");
const cors = require("cors");
const connectMongoDB = require("./config/database.config");
require("dotenv").config({ path: "./src/config.env" });

// constants
const PORT = process.env.PORT;
const MONGOURI = process.env.MONGO_URI;

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  connectMongoDB(MONGOURI);
  console.log(`Server is running on PORT ${PORT}`);
});
