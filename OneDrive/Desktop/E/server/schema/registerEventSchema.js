import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';

const registerEventSchema = mongoose.Schema({
    name: String,
    customerName: String,
    count: String,
    cardNumber: String
})

autoIncrement.initialize(mongoose.connection);
registerEventSchema.plugin(autoIncrement.plugin, 'registerEvent');

const registerEvent = mongoose.model('registerEvent',registerEventSchema)

export default registerEvent;