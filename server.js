const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

const connectionString = 'mongodb://localhost:27017/sms_management_dev';

mongoose.connect(connectionString, { useNewUrlParser: true }, () => {
    console.log('db connected successfully...');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

const port =  process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to SMS Management Api!' });
});

app.use('*', (req, res) =>
    res.status(404).json({
        message: `Welcome! Check the documentation for valid routes`
    })
);

module.exports = app;
