const {v4: uuid} = require('uuid');
const products = [
    {
      id: 1,
      name : 'laptop',
      price: 1000,
      category: 'electronics',
      description: 'A high performance laptop for students and professionals.',
        stock: 50,



    },
    {
      id: 2,
      name : 'smartphone',
      price: 500,
      category: 'electronics',
      description: 'A latest model smartphone with advanced features.',
      stock: 100,
    },

    {
      id: 3,        
        name : 'headphones',
        price: 150, 
        category: 'electronics',
        description: 'Noise-cancelling headphones for an immersive audio experience.',
        stock: 75,},

        {
            id: 4,
            name : 'smartwatch',
            price: 200,     
            category: 'electronics',
            description: 'A smartwatch with fitness tracking and notification features.',
            stock: 30,

        },

        {
            id: 5,
            name : 'tablet',
            price: 300,
            category: 'electronics',
            description: 'A versatile tablet for work and entertainment.',
            stock: 60,
        }


]

module.exports = products;