const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

const {buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => 'hello world!'
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server starter on port ${PORT}`));