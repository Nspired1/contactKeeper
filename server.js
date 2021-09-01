if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }

const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const IP = process.env.IP;

app.get('/', (req, res) => res.json({message: "Welcome to contactKeeper API"}) );

app.listen(PORT, () => console.log(`App listening intently on PORT: ${PORT} and IP: ${IP}`));