import Product from "../models/product.models.js";

const ProductController = {
    findAllProducts: (req, res) => {
        Product.find()
            .then(allProducts => res.json({ success: true, Products: allProducts }))
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    },

    findProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(singleProduct => {
                if (!singleProduct) {
                    return res.status(404).json({ success: false, message: "Product not found" });
                }
                res.json({ success: true, Product: singleProduct });
            })
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.status(201).json({ success: true, Product: newProduct }))
            .catch(err => res.status(400).json({ success: false, error: err.message }));
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedProduct => {
                if (!updatedProduct) {
                    return res.status(404).json({ success: false, message: "Product not found" });
                }
                res.json({ success: true, Product: updatedProduct });
            })
            .catch(err => res.status(400).json({ success: false, error: err.message }));
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.status(404).json({ success: false, message: "Product not found" });
                }
                res.json({ success: true, result });
            })
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    }
};

export default ProductController;