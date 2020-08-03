import express from "express";
const cors = require("cors");

const app = express();
const port = 8080;
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
