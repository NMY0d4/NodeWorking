const ordersModel = require("./orders.model");

module.exports = {
    Query: {
        orders: async (parent) => {
            console.log("Getting the orders...");
            return await ordersModel.getAllOrders();
        },
    },
};
