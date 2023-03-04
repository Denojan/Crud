import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';

const eventSchema = mongoose.Schema({
    name: String,
    description: String,
    startTime: String,
    endTime: String,
    date: String,
    venue: String,
    price: String,
    manager: String
})

autoIncrement.initialize(mongoose.connection);
eventSchema.plugin(autoIncrement.plugin, 'event');

const event = mongoose.model('event',eventSchema)

export default event;