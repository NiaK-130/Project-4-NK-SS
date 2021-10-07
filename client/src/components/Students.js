import {useEffect, useState} from 'react'
import NewStudentForm from './NewStudentForm'
import StudentDisplay from './StudentDisplay'
export default function Students({ teacher, students, deleteStudent, addStudent }) {

console.log(teacher)

    const [form, openCloseForm] = useState(false)


    function handleClick(e) {
        e.preventDefault()
        openCloseForm(!form)
    }

  


    return (
        <div className="App-student">
            <h1 className = "student-header">Your students:</h1>
            <div className = "student-button-container">
            <button className = "add-student-button" onClick={handleClick}>Add Student</button>
            </div>
            {form ? <NewStudentForm addStudent={addStudent} teacher={teacher} /> : ''}
            {students.map((student) => <StudentDisplay deleteStudent={deleteStudent} student={student} key={student.id}/>)}
            </div>
    )
}