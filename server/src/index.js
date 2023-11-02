//To create a Apollo server
const { ApolloServer } = require("@apollo/server");
//To run the created apollo server
const { startStandaloneServer } = require("@apollo/server/standalone");
//Importing typeDefinitions from the schema.js file
const typeDefinitions = require("./schema");

/**
 * To work with the mocked data we need two packages namely
 * @graphql-tools/mock @garphql-tools/schema
 */
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
/**
 * To have more realistic data that feels closer to the application dataset
 * we can define a simple mock object.
 */

const mocks = {
    Query : () => ({
        tracksForHomePage: () => [...new Array(6)]
    }),
    Track: () => ({
      id: () => "track_01",
      title: () => "Astro Kitty, Space Explorer",
      author: () => {
        return {
          name: "Grumpy Cat",
          photo:
            "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        };
      },
      thumbnail: () =>
        "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
      length: () => 1210,
      modulesCount: () => 6,
    }),
};
// This implementation is with mocking
async function  startApolloServer() {
    //Creating a apollo server loaded with type definitions
    const apolloServer = new ApolloServer({ 
        /** Defining the schema property, other way to initialize the apollo server
         * and useful for builing federate sub graphs
         * Also can be used in functions like makeExecutabelSchema
        */
        schema: addMocksToSchema({
            schema: makeExecutableSchema({
                typeDefs: typeDefinitions
            }),
            mocks
        })
     });
    //This start server function returns a Promise 
    const { url } = await startStandaloneServer(apolloServer);
    console.log(`Server started and listening at ${url}`);

}

/** This implementation is without mocking the data
async function  startApolloServer() {
    //Creating a apollo server loaded with type definitions
    const apolloServer = new ApolloServer({ typeDefs: typeDefinitions });
    //This start server function returns a Promise 
    const { url } = await startStandaloneServer(apolloServer);
    console.log(`Server started and listening at ${url}`);

}
 */
// Calling the async function to start the apollo server.
startApolloServer();