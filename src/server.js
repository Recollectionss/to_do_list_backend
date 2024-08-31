require('dotenv').config();

const express = require('express');
const app = express();

const PORT = 5001;

app.use(express.json());

app.listen(PORT, () => {
    console.log("Server has been started")
});
