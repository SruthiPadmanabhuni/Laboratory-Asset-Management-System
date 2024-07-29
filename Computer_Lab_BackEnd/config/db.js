const dotenv = require('dotenv');
const mysql = require('mysql');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log(err);
    }
    if (connection) {
        connection.release();
        console.log('Database connected');
    }
    return;
});

module.exports = pool;