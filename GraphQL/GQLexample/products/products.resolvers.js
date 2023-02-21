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
};
