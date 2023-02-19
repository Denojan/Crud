import express from 'express';

import { addEvent, getEvents, getEvent, editEvent, deleteEvent, registerEvent } from '../controller/eventController.js';

const router = express.Router();

router.post('/add',addEvent);
router.get('/all',getEvents);
router.get('/:id',getEvent);
router.put('/:id',editEvent);
router.delete('/:id',deleteEvent);
router.post('/registerEvent',registerEvent);

export default router;