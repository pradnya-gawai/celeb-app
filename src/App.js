import { useState,useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CelebList from './components/CelebList';
import SearchBar from './components/SearchBar';
import DeleteAlert from './components/DeleteAlert';
import { fetchData } from './components/Helper';

function App() {
  const [celebList, setCelebList] = useState([])
  const [filteredCelebList, setFilteredCelebList] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null); // To store the ID of the item to delete
  const deleteBoxShow = (id) => {
      setDeleteId(id); // Set the ID to be deleted
      setShow(true);
  };  const deleteBoxClose = () => setShow(false);

// function to handle delete operation
  const handleDelete = () => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
        const data = JSON.parse(storedData);
        const updatedData = data.filter(item => item.id !== deleteId);
        localStorage.setItem('userData', JSON.stringify(updatedData));
         setCelebList(updatedData);
         setFilteredCelebList(updatedData); 

    }
    deleteBoxClose(); // Close the delete box after deletion
};
// search opration
const handleSearch = (searchTerm) => {
  if (searchTerm) {
      const filtered = celebList.filter(item =>
          `${item.first} ${item.last}`.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCelebList(filtered);
  } else {
      setFilteredCelebList(celebList); // Reset the filtered list if search term is empty
  }
};
useEffect(() => {
  const storedData = localStorage.getItem('userData');
  if (storedData) {
      const data = JSON.parse(storedData);
      setCelebList(data);
      setFilteredCelebList(data); // Initialize the filtered list to the full data
  }
  else {
    
    fetchData(setCelebList,setFilteredCelebList)
}
}, [])
  return (
    <div className="App">
      <SearchBar onSearch={handleSearch}/>
      <CelebList celebList={filteredCelebList}  setCelebList={setCelebList}deleteBoxShow={deleteBoxShow}/>
      <DeleteAlert show={show} deleteBoxClose={deleteBoxClose} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
