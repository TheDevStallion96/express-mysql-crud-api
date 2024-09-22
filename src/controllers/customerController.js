const customerModel = require('../models/customerModel');

exports.getAllCustomers = (req, res) => {
    customerModel.getAllCustomers((err, customers) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(customers);
    });
};

exports.getCustomerById = (req, res) => {
    customerModel.getCustomerById(req.params.id, (err, customer) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(customer);
    });
};

exports.createCustomer = (req, res) => {
    const newCustomer = req.body;
    customerModel.createCustomer(newCustomer, (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Customer created', customerId: result.insertId });
    });
};

exports.updateCustomer = (req, res) => {
    const updatedCustomer = req.body;
    customerModel.updateCustomer(req.params.id, updatedCustomer, (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Customer updated' });
    });
};

exports.deleteCustomer = (req, res) => {
    customerModel.deleteCustomer(req.params.id, (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ message: 'Customer deleted' });
    });
};
