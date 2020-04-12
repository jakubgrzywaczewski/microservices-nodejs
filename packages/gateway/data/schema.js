import graphQlTools from 'graphql-tools';
import resolvers from './resolvers.js';

const { makeExecutableSchema } = graphQlTools;

const typeDefs = `
  type Query { hey: String! }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
