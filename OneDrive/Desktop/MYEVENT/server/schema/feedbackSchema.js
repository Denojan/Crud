import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';

const feedbackSchema = mongoose.Schema({
    username: String,
    email: String,
    description: String,
    rating: Number,
    newidea:String
    
})

autoIncrement.initialize(mongoose.connection);
feedbackSchema.plugin(autoIncrement.plugin, 'feedback');

const feedback = mongoose.model('feedback',feedbackSchema)

export default feedback;