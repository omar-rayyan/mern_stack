import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;