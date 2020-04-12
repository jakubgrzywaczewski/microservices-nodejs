import express from 'express';
import apolloServerExpress from 'apollo-server-express';
import bodyParser from 'body-parser';

import currentEnvironment from './config/index.js';
import schema from './data/schema.js';

const { graphqlExpress, graphiqlExpress } = apolloServerExpress;
const { port } = currentEnvironment;

const server = express();

server
  .use(bodyParser.json())
  .use('/graphql', graphqlExpress({ schema }))
  .use('/gq', graphiqlExpress({ endpointURL: '/graphql' }))
  .listen(port, () => console.log(`api-gateway listening on port: ${port}`));
