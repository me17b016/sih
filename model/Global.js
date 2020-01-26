const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const globalSchema = new Schema({
    parameter : [{key : String, value : String, users : Number}]
})

module.exports = mongoose.model('Global', globalSchema);  