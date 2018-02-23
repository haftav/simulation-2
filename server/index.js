require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const massive = require('massive');

const auth_controller = require('./controllers/auth_controller.js');
const prop_controller = require('./controllers/prop_controller.js');
const checkForSession = require('./middlewares/checkForSession');

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(checkForSession);

//AUTH CONTROLLERS

app.post('/api/auth/login', auth_controller.login);
app.post('/api/auth/register', auth_controller.register);
app.post('/api/auth/logout', auth_controller.logout);

//PROPERTY CONTROLLERS 

app.post('/api/properties', prop_controller.addProperty);
app.get('/api/properties', prop_controller.getProperties);
app.delete('/api/properties/:id', prop_controller.deleteProperty);

var port = process.env.PORT || 3005;

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(port, () => console.log(`Listening on port ${port}`))
})