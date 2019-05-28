const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

const connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }, () => {
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
        message: `Welcome! Check https://github.com/d3mola/SMS/blob/master/README.md for valid routes`
    })
);

module.exports = app;
