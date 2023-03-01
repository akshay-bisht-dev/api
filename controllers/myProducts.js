const ProductSchema = require("../models/productModel")
 
const getAllProducts = async (req, res) => {

    const { brand, featured, name, sort, select } = req.query;
    const queryObject = {};

    if (brand) {
        queryObject.brand = brand;
    }
    if (featured) {
        queryObject.featured = featured;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    let apiData = ProductSchema.find(queryObject);


    if (sort) {
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    // (select = name), company;

    if (select) {
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }



    // let page = Number(req.query.page) || 1;
    // let limit = Number(req.query.limit) || 8;
    // let skip = (page - 1) * limit;
    // apiData = apiData.skip(skip).limit(limit);




    const Products = await apiData;
    res.status(200).json({ Products, nbHits: Products.length });



    // const apiData = await ProductSchema.find({});
    // res.status(200).json({ apiData });
    // // res.status(200).json({ msg: "I'm api" });
}

module.exports = { getAllProducts };