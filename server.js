const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const schema = require('./schema');
const root = require('./search');

const app = express();
const port = 3000;

app.use(cors()); // enable CORS
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // enable the GraphiQL interface
}));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
