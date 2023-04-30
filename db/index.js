const mongoose = require('mongoose');
const { urlDb } = require('../config');
const { Pool } = require('pg');
mongoose.connect(urlDb, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useNewUrlParser:true
})

const db = mongoose.connection;


//postgres
// const db = new Pool({
//   user: 'postgres',
//   host: '127.0.0.1',
//   database: 'survey_kemenkop',
//   password: '',
//   port: 5432,
// });
// db.connect((err, client, done) => {
//     if (err) {
//       console.error(err);
//     } else {
//       client.query('SELECT NOW()', (err, result) => {
//         done();
  
//         if (err) {
//           console.error(err);
//         } else {
//           console.log(`Successfully connected to PostgreSQL database at ${db.options.host}:${db.options.port}`);
//         }
//       });
//     }
//   });

  // module.exports = db;
// let mysql = require('mysql');
// let db = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'password',
//     database: 'arenabooking'
// });

// db.connect(function (error) {
//     if (!!error) {
//         console.log(error);
//     } else {
//         console.log('Koneksi Berhasil!');
//     }
// })


module.exports = db;