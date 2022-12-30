const mongoose = require('mongoose');
const { urlDb } = require('../config');

mongoose.connect(urlDb, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useNewUrlParser:true
})

const db = mongoose.connection;

// module.exports = db;
// let mysql = require('mysql');
// let db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'laravel'
// });

// db.connect(function (error) {
//     if (!!error) {
//         console.log(error);
//     } else {
//         console.log('Koneksi Berhasil!');
//     }
// })

module.exports = db;