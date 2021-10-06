import {useEffect, useState} from 'react'
import NewStudentForm from './NewStudentForm'
import StudentDisplay from './StudentDisplay'
export default function Students({teacher}) {

    const [form, openCloseForm] = useState(false)
    const [students, setStudents] = useState([])

    function handleClick(e) {
        e.preventDefault()
        openCloseForm(!form)
    }

    function deleteStudent(id) {
        fetch(`http://localhost:3000/students/${id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then(data => setStudents(data));
    }

    function addStudent(name, email, homeAddress, gpa, readingLevel, writingLevel, mathLevel) {

        fetch(`http://localhost:3000/students`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
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
            .then(data => setStudents([...students, data]));
    }

    useEffect(() => {
        fetch("http://localhost:3000/students")
        .then((r) => r.json())
        .then((data) => setStudents(data));
      }, [teacher])

    return (
        <div className="App-student">
            <h1 className = "student-header">Your students:</h1>
            <div className = "student-button-container">
            <button className = "add-student-button" onClick={handleClick}>Add Student</button>
            </div>
            {form ? <NewStudentForm addStudent={addStudent} teacher={teacher} /> : ''}
            {students.map((student) => <StudentDisplay deleteStudent={deleteStudent} student={student} key={student.id} />)}
        </div>
    )
}





