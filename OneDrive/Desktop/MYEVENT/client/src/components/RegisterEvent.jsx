import { useState } from 'react';

import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button, Select, MenuItem  } from "@mui/material";

import { registerevent, getEvent } from '../service/api';

import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px
    }
`
const defaultValue = {
    cusName:'',
    noOfTicket:'',
    email:'',
    phoneNumber:'',
    cardNumber:'',
    cvv:'',
    validDate:''
}



const RegisterEvent = () => {

    const [registerEvent , setRegister] = useState(defaultValue);

    const navigate = useNavigate();

    
    const onValueChange = (e) => {
        
        setRegister({ ...registerEvent, [e.target.name]: e.target.value})
        
    }
    
    const registerEventDetails = async() => {
        await registerevent(registerEvent);
        
        navigate('/allbooking');
    }
    

      
    return(

       <Container>
                <Typography variant="h4">Register for Event</Typography>

                <FormControl>
                    <InputLabel>Customer Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="cusName" />
                </FormControl>
                <FormControl>
                    <InputLabel>Number of tickets</InputLabel>
                    <Select
                        label="noOfTicket"
                        onChange={(e) => onValueChange(e)}
                        name="noOfTicket">
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>

                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phoneNumber" />
                </FormControl>
                <FormControl>
                    <InputLabel>Card Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="cardNumber" />
                </FormControl>
                <FormControl>
                    <InputLabel>CVV</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="cvv" />
                </FormControl>
                <FormControl>
                    <InputLabel>Valid Date</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="validDate" />
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={() => registerEventDetails()}>Register for Event</Button>
                </FormControl>
            </Container>
    )
}

export default RegisterEvent;