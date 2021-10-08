import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Students from "./Students"

function AuthenticatedApp() {
  const [teacher, setTeacher] = useState({});
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((teacher) => { setStudents(teacher.students); setTeacher(teacher) });
      }
    });
  }, []);

  function deleteStudent(studentToDelete) {


    fetch(`/api/students/${studentToDelete}`, {
      method: "DELETE",
    })
      .then(() => setStudents(students.filter(student => student.id !== studentToDelete)));
  }


  function addStudent(image, name, email, homeAddress, gpa, readingLevel, writingLevel, mathLevel) {

    fetch(`/api/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: `${image}`,
        name: `${name}`,
        email: `${email}`,
        home_address: `${homeAddress}`,
        gpa: `${gpa}`,
        reading_level: `${readingLevel}`,
        writing_level: `${writingLevel}`,
        math_level: `${mathLevel}`,
        teacher_id: `${teacher.id}`
      }),



    })
      .then((r) => r.json())
      .then(student => {
        setStudents([...students, student])

        console.log(student)

      });
  }

  return (
    <Router>

      <NavBar teacher={teacher} setTeacher={setTeacher} />

      <main>
        {teacher ? (
          <div>
            <Switch>
              <Route exact path="/">
                <Home teacher={teacher} />
              </Route>

              <Route exact path="/students">
                <Students teacher={teacher} students={students} deleteStudent={deleteStudent} addStudent ={addStudent}/>

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


export default AuthenticatedApp;








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
