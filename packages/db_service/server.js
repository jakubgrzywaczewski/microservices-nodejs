import express from 'express';

import currentEnvironment from './config/index.js';
const { port } = currentEnvironment;

const server = express();


app.listen(port, () =>
  console.log(`api-gateway listening on: ${port}:${server.graphqlPath}`)
);
