
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var constants = require('../../public/constants.js'); 

var CarSchema = new Schema({
    make: {
        type: String
        ,enum: constants.MAKES
        ,required: 'Please choose make'
    },
    model: {
        type: String
        ,enum: constants.MODELS
        ,required: 'Please choose a model'
    },
    year: {
        type: Number
        ,required: 'Please enter a year'
    },    
    value: {
        type: Number
        ,required: 'Please enter a value'
    },
    mileage: {
        type: Number
        ,required: 'Please enter the mileage'
    },
    transmission: {
        type: [{
            type: String,
            enum: constants.TRANSMISSIONTYPES
          }]
        ,required: 'Please select the transmission type'   
    },
    colour: {
        type: String
        ,required: 'Please enter a colour'   
    }
});

module.exports = mongoose.model('Cars', CarSchema); 