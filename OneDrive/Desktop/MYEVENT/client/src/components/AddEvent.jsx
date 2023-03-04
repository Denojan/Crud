import { useState } from 'react';

import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";

import { addEvent } from '../service/api';

import { useNavigate } from 'react-router-dom';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const Container = styled(FormGroup)`
    width: 50%;
    text-align: center;
    background:#2E4960;
    color: white;
    margin: 5% auto 5% auto;
    & > div{
        margin-top: 20px;
        
    }
    
`

const Div = styled(FormControl)`
    width: 30%;
    color: white;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px
        
    }
`

const But = styled(Button)`
    
    color: white;
`

const defaultValue = {
    name:'',
    description:'',
    startTime:'',
    endTime:'',
    date:'',
    venue:'',
    price:'',
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
        <Container  sx={{ borderRadius: '16px' }}>
            <Typography variant="h4">Add Event</Typography>
            <Div>
                <InputLabel>Event Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" variant="soft" />
            </Div>
            <Div>
                <InputLabel>Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="description"/>
            </Div>
            <Div>
                <InputLabel>Start Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="startTime"/>
            </Div>
            <Div>
                <InputLabel>End Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="endTime"/>
            </Div>

            <Div>
           {/**  <LocalizationProvider dateAdapter={AdapterDayjs}>
               
                <DesktopDatePicker
                  label="Date"
                 inputFormat="MM/DD/YYYY"
                 onChange={(e) => onValueChange(e)} name="date" />
            
             </LocalizationProvider>*/}
               <InputLabel>Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="date" /> 
            </Div>
            <Div>
                <InputLabel>Venue</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="venue"/>
            </Div>
            <Div>
                <InputLabel>Price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="price"/>
            </Div>
            <Div>
                <InputLabel>Event Manager</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="manager"/>
            </Div>
            <Div >
                <But sx={{ variant:'#F2994A' }} onClick={() => addEventDetails()}>Add Event</But>
            </Div>
        </Container>
    )
}

export default AddEvent;