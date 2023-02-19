import { useEffect, useState } from 'react';

import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';

import { getEvents, deleteEvent } from '../service/api';

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

const AllEvent = () => {

    const [events, setEvents] = useState([]);

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
    return(
        <StyledTable>
        {/*   <TableHead>
               <TableRow>
                    <TableCell>ID</TableCell>
                </TableRow>
       </TableHead>*/}
            <TableBody>
                {
                    events.map(event => (
                        <Trow key={event._id}>
                            <TableCell>{event._id}</TableCell>
                            <TableCell>{event.name}</TableCell>
                            <TableCell>{event.description}</TableCell>
                            <TableCell>{event.startTime}</TableCell>
                            <TableCell>{event.endTime}</TableCell>
                            <TableCell>{event.date}</TableCell>
                            <TableCell>{event.venue}</TableCell>
                            <TableCell>{event.manager}</TableCell>
                            <TableCell>
                                <Button variant="contained" style ={{marginRight: 10}} component={Link} to={`/edit/${event._id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteEventDetails(event._id)}>Delete</Button>
                            </TableCell>
                        </Trow>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllEvent;