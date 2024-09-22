import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CelebList from './components/CelebList';
import SearchBar from './components/SearchBar';




function App() {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <div className="App">
      <SearchBar/>
      <CelebList/>
    </div>
  );
}

export default App;
