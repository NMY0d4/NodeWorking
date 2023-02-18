const productsModel = require("./products.model");

module.exports = {
    Query: {
        products: async (parent) => {
            console.log("Getting the products...");
            return await productsModel.getAllProducts();
        },
    },
};
