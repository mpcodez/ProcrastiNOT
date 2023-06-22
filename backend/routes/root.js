import express from "express";
import path from "path";
const Router = express.Router;

Router.route("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Views", "index.html"));
})


export default Router;