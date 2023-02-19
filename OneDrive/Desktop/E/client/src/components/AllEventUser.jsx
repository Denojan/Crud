import { useEffect, useState } from 'react';

import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';

import { getEvents } from '../service/api';

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

const AllEventUser = () => {

    const [registerEvents, setEvents] = useState([]);

    useEffect(() => {
        getAllEvents();
    }, []);

    const getAllEvents = async () => {
       let response = await getEvents();
       setEvents(response.data);
       
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
                    events.map(registerEvent => (
                        <Trow key={registerEvent._id}>
                            <TableCell>{registerEvent._id}</TableCell>
                            <TableCell>{registerEvent.name}</TableCell>
                            <TableCell>{registerEvent.customerName}</TableCell>
                            <TableCell>{registerEvent.count}</TableCell>
                            <TableCell>{registerEvent.cardNumber}</TableCell>
                            
                            <TableCell>
                                <Button variant="contained" style ={{marginRight: 10}} component={Link} to={`/registerEvent/${event._id}`}>Register</Button>
                                
                            </TableCell>
                        </Trow>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllEventUser;