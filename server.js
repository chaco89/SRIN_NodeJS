const express = require('express')
const mongoose = require("mongoose");
const route = require("./route/EmployeeRoutes")
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;
const DB_NAME = "db_daniel";

mongoose.connect('mongodb://localhost:27017/'+DB_NAME);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(route);

app.listen(port, () => console.log('server app listening on port %d', port))
