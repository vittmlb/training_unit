/**
 * Created by Vittorio on 11/04/2017.
 */
let config = require('./config');
let express = require('express');
let methodOverride = require('method-override');
let cors = require('cors');
let flash = require('connect-flash');
let path = require('path');
let morgan = require('morgan');
let compress = require('compression');
let bodyParser = require('body-parser');
let session = require('express-session');

module.exports = function() {

    let app = require('express');

    if(process.env.NODE_env === 'development') {
        app.use(morgan('dev'));
    } else if(process.env.NODE_env === 'production') {
        app.use(compress());
    }

    app.use(methodOverride());
    app.use(cors());
    app.use(flash());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.use(express.static('./public'));
    app.use(express.static('./app'));

    require('../app/routes/users.server.routes')(app);

    return app;

};