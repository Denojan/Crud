import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import AllEvent from './components/AllEvent';
import AddEvent from './components/AddEvent';
import EditEvent from './components/EditEvent';
import RegisterEvent from './components/RegisterEvent';
import AllEventBooking from './components/AllEventBooking';
import FeedbackEvent from './components/FeedbackForm';
import AllFeedbackEvent from './components/AllFeedback';

import { BrowserRouter ,Routes, Route} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
     
      <NavBar />
      <Routes>
       <Route path='/add' element={<AddEvent />} />
       <Route path='/all' element={<AllEvent />} />
       <Route path='/edit/:id' element={<EditEvent />} />
       <Route path='/register' element={<RegisterEvent />} />
       <Route path='/allbooking' element={<AllEventBooking />} />
      <Route path='/feedback' element={<FeedbackEvent />} />
       <Route path='/allfeedback' element={<AllFeedbackEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
