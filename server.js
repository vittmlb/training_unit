/**
 * Created by Vittorio on 11/04/2017.
 */
let mongoose = require('./config/mongoose');
let express = require('./config/express');

let db = mongoose();
let app = express();

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log(`Node app is running on port ${app.get('port')}`);
});