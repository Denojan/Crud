
import RegisterEvent from '../schema/registerEventSchema.js';



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
}
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