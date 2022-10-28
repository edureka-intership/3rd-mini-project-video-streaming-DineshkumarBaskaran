const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routerPaths = require('./Router/router');

// declaring port no
const PORT = 8900;

//  connecting to mongoDB
const databaseString = "mongodb://127.0.0.1:27017/Video_paths";

mongoose.connect(databaseString, () => {
    console.log("mongoDB connected");
}, error =>
    console.log("error occurred while connecting to DB:", error));

// beginning of server
let app = express();

// middlewares

app.use(cors()); // to avoid CORS error while using this API
app.use('/video',routerPaths);

app.listen(PORT, () => {
    console.log(`the server is running on port : ${PORT}`)
})