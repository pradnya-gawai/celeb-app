import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CelebList from './components/CelebList';
import SearchBar from './components/SearchBar';
import DeleteAlert from './components/DeleteAlert';




function App() {
  const [celebList, setCelebList] = useState([])
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null); // To store the ID of the item to delete

  const deleteBoxShow = (id) => {
      setDeleteId(id); // Set the ID to be deleted
      setShow(true);
  };  const deleteBoxClose = () => setShow(false);

  const handleDelete = () => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
        const data = JSON.parse(storedData);
        const updatedData = data.filter(item => item.id !== deleteId);
        localStorage.setItem('userData', JSON.stringify(updatedData));
         setCelebList(updatedData);
    }
    deleteBoxClose(); // Close the delete box after deletion
};
  return (
    <div className="App">
      <SearchBar/>
      <CelebList celebList={celebList}  setCelebList={setCelebList}deleteBoxShow={deleteBoxShow}/>
      <DeleteAlert show={show} deleteBoxClose={deleteBoxClose} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
