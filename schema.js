const {buildSchema } = require('graphql');

const schema = buildSchema(`
  type Amiibo {
    id: ID
    image: String
    name: String
    price: Int
  }
  type Query {
    amiibos: [Amiibo]
  }
`);

module.exports = schema