const {faker} = require('@faker-js/faker');

module.exports = () => {
    const data = {products: []}
    // Create 1000 users
    for (let i = 0; i < 10; i++) {
      data.products.push({ prod_name: faker.commerce.product, prod_desc: faker.commerce.productDescription, prod_price: faker.commerce.price })
    }
    return data
  }