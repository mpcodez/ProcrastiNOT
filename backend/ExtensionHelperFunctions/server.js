const isBlocked = require('./backend/is_blocked');
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn")
const app = express();
const path = require("path");
const PORT = 3500;
require('dotenv').config();

//Connect to MongoDB
connectDB();

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.use(express.static(path.join(__dirname, "Public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Public/HTML/index.html"));

    
})

app.get("/isBlocked", (req, res) => {
    let url = req.query.url; // This is the url that we are checking if it should be blocked

    if (IS BREAK) {
        res.json({'isBlocked': true});
    }

    let blockedCategores = // MEDHA PLEASE FILL THIS IN AND SET IT AS A LIST

    if (isBlocked.isA )
});

//don't continue unless the database has connected
mongoose.connection.once('open', () => {

    console.log("Connected To MongoDB");

    app.listen(PORT , () => {
        console.log('Server is running! (Time To Throw A Party)');
    })
    
});
