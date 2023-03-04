import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';

const registerEventSchema = mongoose.Schema({
    
    cusName: String,
    noOfTicket: String,
    email: String,
    phoneNumber: String,
    cardNumber: String,
    cvv: String,
    validDate: String
})

autoIncrement.initialize(mongoose.connection);
registerEventSchema.plugin(autoIncrement.plugin, 'registerEvent');

const registerEvent = mongoose.model('registerEvent',registerEventSchema)

export default registerEvent;