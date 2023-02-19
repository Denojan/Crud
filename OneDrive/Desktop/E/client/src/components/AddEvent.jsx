import { useState } from 'react';

import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button} from "@mui/material";

import { addEvent } from '../service/api';

import { useNavigate } from 'react-router-dom';

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



const AddEvent = () => {

    const [event , setEvent] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        
        setEvent({ ...event, [e.target.name]: e.target.value})
        
    }

    const addEventDetails = async() => {
        await addEvent(event);
        navigate('/all');
    }
    return(
        <Container>
            <Typography variant="h4">Add Event</Typography>
            <FormControl>
                <InputLabel>Event Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="description"/>
            </FormControl>
            <FormControl>
                <InputLabel>Start Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="startTime"/>
            </FormControl>
            <FormControl>
                <InputLabel>End Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="endTime"/>
            </FormControl>
            <FormControl>
                <InputLabel>Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="date"/>
            </FormControl>
            <FormControl>
                <InputLabel>Venue</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="venue"/>
            </FormControl>
            <FormControl>
                <InputLabel>Event Manager</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="manager"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addEventDetails()}>Add Event</Button>
            </FormControl>
        </Container>
    )
}

export default AddEvent;