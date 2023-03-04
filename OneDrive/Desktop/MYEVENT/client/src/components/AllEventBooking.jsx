import { useEffect, useState } from 'react';

import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button, Paper, Grid,  ButtonBase, Typography, Autocomplete, Stack , TextField } from '@mui/material';

import { getEventBookings, deleteEvent } from '../service/api';

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
width: 90%;
margin: 50px auto 0 auto;
    text-align: center;
`
const Trow = styled(TableRow)`
background:#b3cee5;
& > td{
    color:#6699CC;

}
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
const AllEventBooking = () => {

    const [registerevents, setEventBookings] = useState([]);
    //const [options, setSearchInput] = useState("");
    useEffect(() => {
        getAllBooking();
    }, []);

    const getAllBooking = async () => {
      
       let response = await getEventBookings();
       
       setEventBookings(response.data);
       
    }

  
    return(
        
                    
    


         <> 
            <SearchBox spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                freeSolo
                id="free-solo-3-demo"
                disableClearable
                options={registerevents.map((registerEvent) => registerEvent.cusName)}
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
            <StyledTable>
         
         <TableBody> 
            {
           
               registerevents.map(event => (
                     <Trow key={event._id}>
                      
                        <TableCell container spacing={2}>{event._id}</TableCell>
                         <TableCell>{event.name}</TableCell>
                         <TableCell>{event.noOfTicket}</TableCell>
                         <TableCell>{event.email}</TableCell>
                        <TableCell>{event.phoneNumber}</TableCell>
                         <TableCell>{event.cardNumber}</TableCell>
                         <TableCell>{event.cvv}</TableCell>
                         <TableCell>{event.validDate}</TableCell>
                         
           
    
                     </Trow>
  ))
             
               }       
               
            </TableBody>
        </StyledTable></>
    )
}

export default AllEventBooking;