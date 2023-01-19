const express = require('express');
const path = require('path');
const routes = require('./controllers')
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})