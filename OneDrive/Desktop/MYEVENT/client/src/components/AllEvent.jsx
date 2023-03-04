import { useEffect, useState } from 'react';

import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button, Paper, Grid,  ButtonBase, Typography, Autocomplete, Stack , TextField } from '@mui/material';

import { getEvents, deleteEvent, getEventBookings } from '../service/api';

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
const AllEvent = () => {

    const [events, setEvents] = useState([]);
    
    //const [options, setSearchInput] = useState("");
    useEffect(() => {
        getAllEvents();
       
    }, []);

    const getAllEvents = async () => {
       let response = await getEvents();
       setEvents(response.data);
       
    }

    
    const deleteEventDetails = async (id) => {
        await deleteEvent(id);
        getAllEvents();
    }

    

  /*const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (options.length > 0) {
      events.filter((event) => {
      return event.name.match(options);
  });
  }*/
  
    return(
        
                    
    


      /*  <StyledTable>
         
            <TableBody>*/
         <> 
            <SearchBox spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={events.map((event) => event.name)}
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
                    
                  { events.map(event => (
                       
                        
                          <Pap>
                             <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              {event.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
              {event.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Starting from {event.startTime} and ended at  {event.endTime} . 
              </Typography>
              <Typography variant="body2" color="text.secondary">
              This will be held at  {event.venue} on {event.date} . 
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Price per person =  {event.price}. 
              </Typography>
              
            </Grid>
            <Grid item>
              <Typography  variant="body2">
              Event organized by : {event.manager}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            <Button variant="contained" style ={{marginRight: 10}} component={Link} to={`/edit/${event._id}`}>Edit</Button>
             <Button variant="contained" style ={{marginRight: 10}} color="error" onClick={() => deleteEventDetails(event._id)}>Delete</Button>
             <Button variant="contained" style ={{marginRight: 10}} color="success" component={Link} to={`/register`}>Register</Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>


      <Trow key={event._id}>
                            
                            </Trow>
                        
                       </Pap>        ))}</>
                
                
            
            /*</TableBody>
        </StyledTable>*/
    )
}

export default AllEvent;