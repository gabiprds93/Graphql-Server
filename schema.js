const {buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    products: [Product]
    orders: [Order]
  }
  
  type Mutation {
    addOrder (
      id: ID!
      delivery_date: String
      products: [Product]
    ):
  }

  type Product {
    id: ID
    image: String
    name: String
    price: Int
  }

  type Order {
    id: ID
    delivery_date: String
    products: [Product]
  }
`);

module.exports = schema