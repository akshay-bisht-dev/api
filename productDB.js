require("dotenv").config();
const db = require("./database/db");
const ProductSchema = require("./models/productModel");
const ProductJson = require("./products.json")

const start = async() => {
    try {
        await db(process.env.MONGODB_URL);
        await ProductSchema.deleteMany();
        await ProductSchema.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start();