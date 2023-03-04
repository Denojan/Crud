import { useEffect, useState } from 'react';

import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button, Paper, Grid,  ButtonBase, Typography, Autocomplete, Stack , TextField } from '@mui/material';

import { getFeedbacks } from '../service/api';

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
width: 90%;
margin: 50px auto 0 auto;
    text-align: center;
`
const Trow = styled(TableRow)`
    
`
const SearchBox = styled(Stack)`
margin: 50px auto 0 auto;
border-radius: 5;
`


const Pap = styled(Paper)`
p: 2;
width: 90%;
margin: 50px auto 0 auto;
text-align: center;
maxWidth: 500;
text-color:#2E4960;
font-color:#2E4960;
flexGrow: 1;
background: #EFF0F6;

`
const Img = styled('img')({
margin: 'auto',
display: 'block',
maxWidth: '100%',
maxHeight: '100%',
});
const AllFeedback = () => {

    const [feedbacks, setfeedbacks] = useState([]);
    
    //const [options, setSearchInput] = useState("");
    useEffect(() => {
        getAllFeedbacks();
       
    }, []);

    const getAllFeedbacks = async () => {
       let response = await getFeedbacks();
       setfeedbacks(response.data);
       
    }


  
    return(
        
                    
    


        <StyledTable>
         
            <TableBody>
          
            <SearchBox spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={feedbacks.map((feedbacks) => feedbacks.username)}
                /*  onChange={handleChange}
                      value={options}*/
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Event"
                    
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                      
                    }}
                  />
                )}
              />
            </SearchBox>
                    
                  { feedbacks.map(feedback => (
                       <Trow key={feedback._id}>
                        <TableCell>{feedback._id}</TableCell>
                        <TableCell>{feedback.username}</TableCell>
                        <TableCell>{feedback.email}</TableCell>
                        <TableCell>{feedback.description}</TableCell>
                        <TableCell>{feedback.rating}</TableCell>
                        <TableCell>{feedback.newidea}</TableCell> 
           


      
                            
                            </Trow>
                        
                       
                
                ))}
            
            </TableBody>
        </StyledTable>
    )
}

export default AllFeedback;