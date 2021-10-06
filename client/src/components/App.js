import React, { useEffect, useState } from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Students from "./Students"

function App() {
  const [teacher, setTeacher] = useState('');

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((teacher) => setTeacher(teacher));
      }
    });
  }, []);

  return (
    <Router>

      <NavBar teacher={teacher} setTeacher={setTeacher} />
      
      
      <main>
        {teacher ? (
          <div>
          <Switch>
          
            <Route path="/">
              <Home teacher={teacher}/>
            </Route>
            
            <Route exact path="/students">
              <Students students= {teacher.students} teacher={teacher}/>
            </Route>
          </Switch>
          </div>
        ) : (
          <div>
          <Switch>
            <Route path="/signup">
              <SignUp setTeacher={setTeacher} />
            </Route>
            <Route path="/login">
              <Login setTeacher={setTeacher} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
        )}
      </main>
    </Router>
  );
}


export default App;








// import './App.css';
// import {useEffect, useState} from 'react';
// import Login from "./components/Login";



// function App() {

//   const [teachers, setTeachers] = useState([])
//   const [students, setStudents] = useState([])
  

//   useEffect(() => {
//     fetch('/teachers')
//     .then((r) => r.json())
//     .then((data) => setTeachers(data));
//   }, [])



//   return (
//     <div className="App">
//       <header className="App-header">
     
        
//       </header>
//     </div>
//   );
// }

// export default App;
