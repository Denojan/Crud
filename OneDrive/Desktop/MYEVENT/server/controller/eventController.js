
import Event from '../schema/eventSchema.js';
import RegisterEvent from '../schema/registerEventSchema.js';

export const addEvent = async (request, response) => {
    const event = request.body;

    const newEvent = new Event(event);

    try{
        await newEvent.save();
        response.status(201).json(newEvent);
    }catch(error){
        response.status(400).json({message: error.message});
    }
}

export const getEvents = async (request, response) => {
    try{
       const events = await Event.find({});
       response.status(200).json(events);
    }catch(error){
        response.status(404).json({message: error.message});
    }
}

export const getEvent = async (request, response) => {
    
    try{
       
       const event = await Event.findById(request.params.id);
       response.status(200).json(event);
    }catch(error){
        response.status(404).json({message: error.message});
    }
}

export const editEvent = async (request, response) => {
    let event = request.body;
    const editEvent = new Event(event);
    try{
      
       await Event.updateOne({ _id: request.params.id }, editEvent);
       response.status(201).json(editEvent);
    }catch(error){
        response.status(409).json({message: error.message});
    }
}

export const deleteEvent = async (request, response) => {
    
    
    try{
      
       await Event.deleteOne({ _id: request.params.id });
       response.status(201).json({message: 'Event deleted successfully'});
    }catch(error){
        response.status(409).json({message: error.message});
    }
}
/*
export const registerevent = async (request, response) => {
    const registEvent = request.body;
    
    const newRegisterEvent = new RegisterEvent(registEvent);

    try{
        await newRegisterEvent.save();
       // await RegisterEvent.updateOne({ _id: request.params.id }, newRegisterEvent);
        response.status(201).json(newRegisterEvent);
    }catch(error){
        response.status(400).json({message: error.message});
    }
}

export const getEventBookings = async (request, response) => {
    try{
    
       const bookings = await RegisterEvent.find();
       console.log(bookings)
       response.status(200).json({bookings});
    }catch(error){
        response.status(401).json({message: error.message});
    }
}*/
/*export const searchEvents = async (query) => {
    // Use the $regex operator to search for documents that contain the query
    const events = await Event.find({
      $or: [
        { name: { $regex: query, $options: 'i' } }, // case-insensitive search on the name field
        
        // add more fields to search here
      ]
    });
    return events;
  }*/