/**
 * Created by Vittorio on 15/04/2017.
 */
let users = require('../controllers/users.server.controller');

module.exports = function(app) {

    app.route('/api/users')
        .get(users.list)
        .post(users.create);

    app.route('/api/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);

    app.param('userId', users.findById);

};