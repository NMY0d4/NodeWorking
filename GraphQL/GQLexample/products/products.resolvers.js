const productsModel = require("./products.model");

module.exports = {
    Query: {
        products: async () => {
            console.log("Getting the products...");
            return await productsModel.getAllProducts();
        },
        productsByPrice: async (_, args) => {
            return await productsModel.getProductsByPrice(args.min, args.max);
        },
        product: async (_, args) => {
            return await productsModel.getProductById(args.id);
        },
    },

    Mutation: {
        addNewProduct: async (_, args) => {
            return await productsModel.addNewProduct(
                args.id,
                args.description,
                args.price
            );
        },
        addNewProductReview: async (_, args) => {
            return await productsModel.addNewProductReview(
                args.id,
                args.rating,
                args.comment
            );
        },
    },
};
