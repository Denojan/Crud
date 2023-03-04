import express from 'express';
//,feedbackevent, getFeedbackevent 
import { addEvent, getEvents, getEvent, editEvent, deleteEvent } from '../controller/eventController.js';
import { registerevent, getEventBookings} from '../controller/registerEventController.js';
import { addFeedback, getFeedbacks} from '../controller/feedbackController.js';
const router = express.Router();

router.post('/add',addEvent);
router.get('/all',getEvents);
router.get('/:id',getEvent);
router.put('/:id',editEvent);
router.delete('/:id',deleteEvent);

router.post('/register',registerevent);
router.get('/allbooking',getEventBookings);

router.post('/feedback',addFeedback);
router.get('/allfeedback',getFeedbacks);
export default router;