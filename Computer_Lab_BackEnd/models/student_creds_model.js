const pool = require('../config/db');

class Student_creds {
    static getAll() {
        return new Promise((resolve, reject) => {
            pool.query(`select * from student_creds`, (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static getStudent(username) {
        return new Promise((resolve, reject) => {
            pool.query(`select * from student_creds where username = ?`, [username], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results[0]);
            });
        });
    }

    static changePassword(username, password) {
        return new Promise((resolve, reject) => {
            pool.query(`update student_creds set password = ? where username = ?`, [password, username], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }
}


module.exports = Student_creds;