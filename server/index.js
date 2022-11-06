import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { VerifyToken } from "./middlewares/VerifyToken.js";

const app = express();
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(VerifyToken);

app.get("/", (req, res) => {
  res.send("working fine");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});