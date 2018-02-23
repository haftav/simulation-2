require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const massive = require('massive');

const auth_controller = require('./controllers/auth_controller.js');
const checkForSession = require('./middlewares/checkForSession');

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(checkForSession);

app.post('/api/auth/login', auth_controller.login);
app.post('/api/auth/register', auth_controller.register);
app.post('/api/auth/logout', auth_controller.logout);

var port = process.env.PORT || 3005;

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(port, () => console.log(`Listening on port ${port}`))
})