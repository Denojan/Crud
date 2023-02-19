import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import AllEvent from './components/AllEvent';
import AddEvent from './components/AddEvent';
import EditEvent from './components/EditEvent';

import { BrowserRouter ,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     
      <NavBar />
      <Routes>
       <Route path='/add' element={<AddEvent />} />
       <Route path='/all' element={<AllEvent />} />
       <Route path='/edit/:id' element={<EditEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
