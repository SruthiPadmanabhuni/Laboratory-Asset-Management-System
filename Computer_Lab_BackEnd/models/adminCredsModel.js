const pool = require('../config/db')

class Admin_creds {
    static getAdmin(username) {
        return new Promise((resolve, reject) => {
            pool.query(`select * from admin_creds where username = ?`,[username], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                if (results.length === 0) {
                    return resolve(null);
                }
                return resolve(results[0].password);
            });
        });
    }
}

module.exports = Admin_creds