import express from "express";
import mongoose from "mongoose";
const cors = require("cors");
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 8080;

const connectString = process.env.MONGO_URI;

mongoose
    .connect(connectString, {
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then((con) => {
        console.log("DB connection successful");
    })
    .catch((error) => {
        console.log(error);
        console.log("Unable to connect to DB");
    });

const apiRouter = require("./routes/api");
const indexRouter = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/", indexRouter);
app.use("/api", apiRouter);

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
