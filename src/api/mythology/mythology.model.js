const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MythologySchema = new Schema({
    name: { type: String, required: true, trim: true },
    birth: { type: String, trim: true },
    parents: { type: String,},
    siblings: { type: String,},
    abode: { type: String,},
    symbol: { type: String,},
    description: { type: String, trim: true },
    img: { type: String, trim: true },
    
   
}, { timestamp: true }
)

const Mythology = mongoose.model('Mythology', MythologySchema)
module.exports = Mythology