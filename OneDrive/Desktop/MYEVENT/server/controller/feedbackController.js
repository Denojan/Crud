
import FeedbackEvent from '../schema/feedbackSchema.js'

export const addFeedback = async (request, response) => {
    const feedback = request.body;

    const newFeedback = new FeedbackEvent(feedback);

    try{
        await newFeedback.save();
        response.status(201).json(newFeedback);
    }catch(error){
        response.status(400).json({message: error.message});
    }
}

export const getFeedbacks = async (request, response) => {
    try{
       const feedbacks = await FeedbackEvent.find({});
       response.status(200).json(feedbacks);
    }catch(error){
        response.status(404).json({message: error.message});
    }
}
