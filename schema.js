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
      products: {
        id: ID!
        quantity: Int
      }
      total_price: Int
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
    products: {
      id: ID
      quantity: Int
    }
    total_price: Int
  }
`);

module.exports = schema