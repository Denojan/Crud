import { useState, useEffect } from 'react';

import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button} from "@mui/material";

import { editEvent, getEvent } from '../service/api';

import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px
    }
`
const defaultValue = {
    name:'',
    description:'',
    startTime:'',
    endTime:'',
    date:'',
    venue:'',
    manager:''
}



const EditEvent = () => {

    const [event , setEvent] = useState(defaultValue);

    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        loadEventDetails();
    }, [])

    const loadEventDetails = async () => {
        const response = await getEvent(id);
        setEvent(response.data);
    }

    const onValueChange = (e) => {
        
        setEvent({ ...event, [e.target.name]: e.target.value})
        
    }

    const editEventDetails = async() => {
        await editEvent(event, id);
        navigate('/all');
    }
    return(
        <Container>
            <Typography variant="h4">Edit Event</Typography>
            <FormControl>
                <InputLabel>Event Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={event.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="description" value={event.description}/>
            </FormControl>
            <FormControl>
                <InputLabel>Start Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="startTime" value={event.startTime}/>
            </FormControl>
            <FormControl>
                <InputLabel>End Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="endTime" value={event.endTime}/>
            </FormControl>
            <FormControl>
                <InputLabel>Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="date" value={event.date}/>
            </FormControl>
            <FormControl>
                <InputLabel>Venue</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="venue" value={event.venue}/>
            </FormControl>
            <FormControl>
                <InputLabel>Event Manager</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="manager" value={event.manager}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => editEventDetails()}>Edit Event</Button>
            </FormControl>
        </Container>
    )
}

export default EditEvent; 