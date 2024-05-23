require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./router");

const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on ${host}:${port} `);
});
