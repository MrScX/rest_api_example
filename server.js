
const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/user");

const app = express();

app.use(bodyParser.json());

app.use(userRoutes.router);

app.listen(3000, () => {
    console.log("Server started on port: 3000");
});