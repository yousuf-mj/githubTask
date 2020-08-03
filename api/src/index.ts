import express from "express";
import path from "path";

const app = express();
const port = 8080;
const apiRouter = require('./routes/api');
const indexRouter = require('./routes/index');

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.use(express.json())
app.use(express.urlencoded())

app.use('/', indexRouter);
app.use('/api', apiRouter);

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );