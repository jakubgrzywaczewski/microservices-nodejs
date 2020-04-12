import graphQlTools from 'graphql-tools';
import resolvers from './resolvers.js';

const { makeExecutableSchema } = graphQlTools;

const typeDefs = `
  type Query {
    Mails: [Mail]
    mail(subject: String!, receiver: String!): Mail
  }

  type Mutation {
    mail(subject: String!, receiver: String!, content: String!): Mail
  }

  type Mail {
    subject: String
    receiver: String
    content: String
    _id: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
