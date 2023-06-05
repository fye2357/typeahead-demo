const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type State {
    name: String!
  }

  type Query {
    searchStates(args: String!): [State!]!
  }

  schema {
    query: Query
  }
`);