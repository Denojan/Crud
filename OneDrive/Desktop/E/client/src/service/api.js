import axios from 'axios';

const URL = 'http://localhost:8000';

export const addEvent = async (data) => {
    try{
       return await axios.post(`${URL}/add`, data);
    }catch(error){
        console.log('Error while callimg add Event Api',error);
    }
}

export const getEvents = async () => {
    try{
       return await axios.get(`${URL}/all`);
    }catch(error){
        console.log('Error while calling getEvents API', error);
    }
}

export const getEvent = async (id) => {
    try{
       return await axios.get(`${URL}/${id}`);
    }catch(error){
        console.log('Error while calling getEvent API', error);
    }
}


export const editEvent = async (event, id) => {
    try{
       return await axios.put(`${URL}/${id}`,event);
    }catch(error){
        console.log('Error while calling editEvent API', error);
    }
}

export const deleteEvent = async (id) => {
    try{
       return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log('Error while calling deleteEvent API', error);
    }
}