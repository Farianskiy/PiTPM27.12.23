const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite'); 

const userModel = {
    createUser(firstName, lastName, middleName, city, role) {
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO users (firstName, lastName, middleName, city, role) VALUES (?, ?, ?, ?, ?)',
                [firstName, lastName, middleName, city, role],
                function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ id: this.lastID });
                    }
                });
        });
    },

    findByRole(role) {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM users WHERE role = ?', [role], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },

    getAllUsers() {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM users', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },

    findUserByName(firstName, lastName) {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM users WHERE firstName = ? AND lastName = ?', [firstName, lastName], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    },
};

module.exports = userModel;
