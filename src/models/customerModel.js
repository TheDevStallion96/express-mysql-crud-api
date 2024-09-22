const db = require('../db');

exports.getAllCustomers = (callback) => {
    db.query('SELECT * FROM Customers', callback);
};

exports.getCustomerById = (id, callback) => {
    db.query('SELECT * FROM Customers WHERE customer_id = ?', [id], callback);
};

exports.createCustomer = (customer, callback) => {
    db.query('INSERT INTO Customers (customer_name, email) VALUES (?, ?)', [customer.customer_name, customer.email], callback);
};

exports.updateCustomer = (id, customer, callback) => {
    db.query('UPDATE Customers SET customer_name = ?, email = ? WHERE customer_id = ?', [customer.customer_name, customer.email, id], callback);
};

exports.deleteCustomer = (id, callback) => {
    db.query('DELETE FROM Customers WHERE customer_id = ?', [id], callback);
};
