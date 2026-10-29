const { Schema, model } = require("mongoose");

const CustomerSchema = new Schema(
    {
       username: {
            type: String,
            required: true,
            default: "xyz"
       },
       email: {
            type: String,
            required: true,
            unique: true
       },
       password: {
            type: String,
            required: true
       },
       confirmPassword: {
            type: String,
            required: true
       }
    }
);

const CustomerModelClass = model( "customer", CustomerSchema );
module.exports = CustomerModelClass ;



