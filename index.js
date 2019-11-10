const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');
const { amiibos } = require('./data');

const app = express();

const root = {
  amiibos: () => amiibos
}

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server starter on port ${PORT}`));