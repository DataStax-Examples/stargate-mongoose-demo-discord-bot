const mongoose = require('mongoose');

const botSchema = new mongoose.Schema({
    name: String
});

const Bot = mongoose.model('Bot', botSchema);

module.exports = Bot;