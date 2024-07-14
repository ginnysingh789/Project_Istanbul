const express = require("express");
const routes = require("./routes/routes");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
require("./config/db").connect();

app.use("/v1", routes);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});