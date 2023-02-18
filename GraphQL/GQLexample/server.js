const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync("**/*", {
    extensions: ["graphql"],
});

const schema = makeExecutableSchema({
    typeDefs: typesArray,
});

const root = {
    products: require("./products/products.model"),
};

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(3000, () => {
    console.log("Running GraphQl server...");
});
