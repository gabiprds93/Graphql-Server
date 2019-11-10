const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');
const rootValue = require('./rootValue');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server starter on port ${PORT}`));