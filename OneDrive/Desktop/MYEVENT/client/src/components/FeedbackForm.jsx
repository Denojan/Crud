import { useState } from 'react';

import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button, Select, MenuItem } from "@mui/material";

import { feedbackevent } from '../service/api';

import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px
    }
`
const defaultValue = {
    username:'',
    email:'',
    description:'',
    rating:'',
    newidea:''
}



const FeedbackEvent = () => {
    
    const [feedback , setFeedback] = useState(defaultValue);

    const navigate = useNavigate();

    
    const onValueChange = (e) => {
        
        setFeedback({ ...feedback, [e.target.name]: e.target.value})
        
    }
    
    const feedbackEventDetails = async() => {
        await feedbackevent(feedback);
        navigate('/allfeedback');
    }
    {/** */}
    

      
    return(

       <Container>
                <Typography variant="h4">Feedback</Typography>

                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" />
                </FormControl>
                <FormControl>
                    <InputLabel>Description</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="description" />
                </FormControl>
                
                <FormControl>
                    <InputLabel>Rating</InputLabel>
                    <Select
                        label="rating"
                        onChange={(e) => onValueChange(e)}
                        name="rating">
                        <MenuItem value={1}>Very bad</MenuItem>
                        <MenuItem value={2}>Bad</MenuItem>
                        <MenuItem value={3}>Neutral</MenuItem>
                        <MenuItem value={4}>Good</MenuItem>
                        <MenuItem value={5}>Excellent</MenuItem>
                        
                    </Select>

                </FormControl>

                <FormControl>
                    <InputLabel>New idea</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="newidea" placeholder='Enter your new idea about events here'/>
                </FormControl>

                <FormControl>
                    <Button variant="contained" onClick={() => feedbackEventDetails()}>Submit</Button>
                </FormControl>
            </Container>
    )
}

export default FeedbackEvent;