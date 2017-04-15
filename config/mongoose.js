/**
 * Created by Vittorio on 11/04/2017.
 */
let mongoose = require('mongoose');
let config = require('./config');

module.exports = function() {

    let db = mongoose.connect(config.db);

    mongoose.connection.on('connected', function () {
        console.log(`Mongoose connected at ${config.db}`);
    });

    mongoose.connection.on('error', function () {
        console.log(`Mongoose connection error: ${error}`);
    });

    mongoose.connection.on('disconnected', function () {
        console.log(`Mongoose disconnected`);
    });

    mongoose.connection.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log(`Mongoose disconnected througth app termination`);
            process.exit(0);
        });
    });

    require('../app/models/users.server.model');

    return db;

};