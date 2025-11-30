import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// db
import { authors, games, reviews } from "./_db.js";
// Types
import { typeDefs } from "./schema.js";
const resolvers = {
    Query: {
        authors: () => authors,
        games: () => games,
        reviews: () => reviews,
    }
};
// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`Server is running at: ${url}`);
