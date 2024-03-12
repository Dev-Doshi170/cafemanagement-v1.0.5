const { Pool } = require ('pg')

const client = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'BaristaDB',
    user: 'postgres',
    password: 'dev',
})
   client.connect((err) => {   
    if (err) {
     console.error('connection error', err.stack)
    }else{
     console.log('connected')}
    })

   module.exports = client;

// const { Pool } = require('pg');

// const client = new Pool({
//   host: 'localhost',
//   port: 5432,
//   database: 'BaristaDB',
//   user: 'postgres',
//   password: 'dev',
// });

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected to the database');
//   } catch (error) {
//     console.error('Connection error', error.stack);
//   }
// }

// connectToDatabase();

// module.exports = client;
