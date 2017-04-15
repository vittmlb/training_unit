/**
 * Created by Vittorio on 15/04/2017.
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsersSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    nome: {
        type: String,
        trim: true
    }
});

UsersSchema.set('toJSON', {
    virtuals: true,
    getters: true
});

mongoose.model('User', UsersSchema);