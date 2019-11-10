const {buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    products: [Product]
    orders: [Order]
  }

  type Product {
    id: ID
    image: String
    name: String
    price: Int
  }

  type ShorTypeProduct {
    id: ID
    quantity: Int
  }

  type Order {
    id: ID
    delivery_date: String
    products: [ShorTypeProduct]
    total_price: Int
  }
`);

module.exports = schema