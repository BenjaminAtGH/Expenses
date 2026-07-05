// const express = require("express");
// const { google } = require("googleapis");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());


const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "..", "Public")));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html"));

});

// get all items
app.get("/results", (req, res) => {
    db.query("SELECT * FROM items", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});