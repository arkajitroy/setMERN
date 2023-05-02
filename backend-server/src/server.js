const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./src/config.env" });

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
