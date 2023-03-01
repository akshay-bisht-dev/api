require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./database/db.js')

const productsRoutes = require("./routes/products")

app.get("/", (req, res) => {
    res.send("Hi, I'm Live!");
});

// middleware or to set router
app.use("/api/products", productsRoutes);

const start = async() => {
    try {
        await db(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Yes, I'm Connected at Port No. ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();