import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CelebList from './components/CelebList';



function App() {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <div className="App">
      <CelebList/>
    </div>
  );
}

export default App;
