import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import {authors, games, reviews} from "./_db.js";

// Types
import { typeDefs } from "./schema.js";

const resolvers = {
    Query: {
        authors: () => authors,
        author: (_parent: any, args: { id: string }) => {
            return authors.find(author => author.id === args.id);
        },
        games: () => games,
        game: (_parent: any, args: { id: string }) => {
            return games.find(game => game.id === args.id);
        },
        reviews: () => reviews,
        review: (_parent: any, args: { id: string }) => {
            return reviews.find(review => review.id === args.id);
        },
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