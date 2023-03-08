import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import authRouter from "./routes/authRoute.js";
import bodyParser from "body-parser";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from the server side");
});
app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
