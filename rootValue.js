const { products, orders } = require('./data');

let addOrder = (item) => {
  orders.push(item)
  return orders.find(order => {order.id === item.id});
}

const rootValue = {
  products: () => products,
  orders: () => orders,
  addOrder: addOrder
}

module.exports = rootValue