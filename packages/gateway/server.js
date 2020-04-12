import express from 'express';
import apolloServerExpress from 'apollo-server-express';

import currentEnvironment from './config/index.js';
import schema from './data/schema.js';

const { ApolloServer } = apolloServerExpress;
const { port } = currentEnvironment;

const app = express();
const server = new ApolloServer({ schema });

server.applyMiddleware({ app });
app.listen(port, () =>
  console.log(`api-gateway listening on: ${port}:${server.graphqlPath}`)
);
