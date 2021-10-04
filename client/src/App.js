
import './App.css';
import {useEffect, useState} from 'react';


function App() {
  const [erosters, setErosters] = useState([]);

  useEffect(() => fetch('/erosters')
  .then((res) => res.json())
  .then((json) => setErosters(json)),
  []
  );
  return (
    <div className="App">
      <header className="App-header">
      <ul>
        {erosters.map((erosters) => (
          <li key = {erosters.name}>{erosters.name}</li>
        ))}
      </ul>
        
      </header>
    </div>
  );
}

export default App;
