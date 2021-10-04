import './App.css';
import {useEffect, useState} from 'react';
import Login from "./components/Login";
import Home from "./components/Home";


function App() {

  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])
  

  useEffect(() => {
    fetch('/teachers')
    .then((r) => r.json())
    .then((data) => setTeachers(data));
  }, [])



  return (
    <div className="App">
      <header className="App-header">
     
        
      </header>
    </div>
  );
}

export default App;
