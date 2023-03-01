const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        uinque: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    stock: {
        type: Number,
        default: 25
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi", "oneplus", "oppo", "vivo", "asus", "hp", "micromax"],
            message: `{values} is not supported`,
        }
    },

    // color: {
    //     type: String,
    //     enum: {
    //         values: [ "red", "black", "green" ],
    //         message: `{values} is not supported`,
    //     }
    // },
    
    category: {
        type: String,
        enum: {
            values: [ "mobile", "television", "laptop", "headphone" ],
            message: `{values} is not supported`,
        }
    },
    featured: {
        type: Boolean,
        default: false
    },
    images: {
        type: Array,
        required: true,
        url: {
            type: String
        }
    }
});


module.exports = mongoose.model('Product', productSchema);





// {
//     "id": 6,
//     "name": "REDMI NOTE 10s 64GB",
//     "company": "mi",
//     "price": 12999,
//     "image": "https://res.cloudinary.com/dcwbgmwqz/image/upload/v1676206378/digikart-api-images/mobile/61ahn9N38zL._SX679__hkfawf.jpg",
//     "description": "Redmi Note 10S (Deep Sea Blue, 6GB RAM, 64GB Storage) - Super Amoled Display | 64 MP Quad Camera | 6 Month Free Screen Replacement (Prime only) |33W Charger Included",
//     "category": "mobile",
//     "rating": 4.7,
//     "featured": true
// },
// {
//     "id": 7,
//     "name": "Redmi note 11 64GB",
//     "company": "mi",
//     "price": 13999,
//     "image": "https://res.cloudinary.com/dcwbgmwqz/image/upload/v1676206378/digikart-api-images/mobile/61ahn9N38zL._SX679__hkfawf.jpg",
//     "description": "Display: 90Hz FHD+ (1080x2400) AMOLED display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio Camera: 50 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 13 MP Front camera Battery: 5000 mAh large battery with 33W Pro fast charger in-box and Type-C connectivity Processor: Qualcomm Snapdragon 680 Octa-core; 6nm processor; Up to 2.4GHz clock speed Memory, Storage & SIM: 4GB RAM | 64GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)",
//     "category": "mobile",
//     "rating": 4.7,
//     "featured": true
// },
// {
//     "id": 8,
//     "name": "Redmi note 9 pro 128GB",
//     "company": "mi",
//     "price": 14499,
//     "image": "https://res.cloudinary.com/dcwbgmwqz/image/upload/v1676206378/digikart-api-images/mobile/61ahn9N38zL._SX679__hkfawf.jpg",
//     "description": "Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 128GB Storage) - Latest 8nm Snapdragon 720G & Alexa Hands-Free",
//     "category": "mobile",
//     "rating": 4.7,
//     "featured": true
// },
// {
//     "id": 9,
//     "name": "Redmi A1 32GB",
//     "company": "mi",
//     "price": 6999,
//     "image": "https://res.cloudinary.com/dcwbgmwqz/image/upload/v1676206378/digikart-api-images/mobile/61ahn9N38zL._SX679__hkfawf.jpg",
//     "description": "Display: 16.56cm HD+ Scratch resistant display Processor: MediaTek Helio A22 processor; up to 2.0GHz Camera: 8MP Dual camera | 5MP Front camera Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G) Battery: 5000 mAh large battery with 10W in-box charger",
//     "category": "mobile",
//     "rating": 4.7,
//     "featured": true
// },
// {
//     "id": 10,
//     "name": " Xiomi 12 pro 256GB",
//     "company": "mi",
//     "price": 56999,
//     "image": "https://res.cloudinary.com/dcwbgmwqz/image/upload/v1676206378/digikart-api-images/mobile/61ahn9N38zL._SX679__hkfawf.jpg",
//     "description": "The Pro-grade triple 50MP camera array unleashes the true power of a triple-camera setup. The large 50MP Sony IMX707 captures upto 120% more light. The 50MP Telephoto & 50MP Ultra-wide enable you to enjoy a top-class cinematography experience. The 32MP front facing camera is segment best The 6.73'' WQHD+ 120Hz AMOLED display with AdaptiveSync Pro is a master in clarity, brightness and smoothness. The display is certified A+ by DisplayMate & is Dolby Vision & HDR10+ compliant. It is protected by Corning Gorilla Glass Victus and comes with a In-display fingerprint sensor The flagship Snapdragon 8 Gen 1, 4nm processor is designed to provide groundbreaking performance. The super-big 2900mm2 vapour chamber, along with three layers of massive graphite sheets provides an advanced cooling system. The 120W in-box HyperCharger can fully charge the massive 4600mAh battery in 18 minutes. The device also supports upto 50W of Wireless Turbo charging.",
//     "category": "mobile",
//     "rating": 5.0,
//     "featured": true
// }