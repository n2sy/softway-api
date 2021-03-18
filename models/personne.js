const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personSchema = new Schema({
    prenom : {
        type : String,
        required : true
    },
    nom : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    Profession : {
        type : String,
        required : true
    },
    Avatar : {
     type : String
    }
});

module.exports = mongoose.model('Personne', personSchema);