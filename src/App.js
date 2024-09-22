import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CelebList from './components/CelebList';
import SearchBar from './components/SearchBar';
import DeleteAlert from './components/DeleteAlert';




function App() {
  const [show, setShow] = useState(false);
  const deleteBoxShow = () => setShow(true);
  const deleteBoxClose = () => setShow(false);


  return (
    <div className="App">
      <SearchBar/>
      <CelebList deleteBoxShow={deleteBoxShow}/>
      <DeleteAlert show={show} deleteBoxClose={deleteBoxClose}/>
    </div>
  );
}

export default App;
