export default function StudentDisplay({student, deleteStudent}) {

    function handleClick() {
        deleteStudent(student.id)
    }

    return (
        <div >
            <h2>{student.name}</h2>
            <h4>Email: </h4> {student.email}
            <h4>Home Address: </h4> {student.home_address}
            <h4>GPA: </h4> {student.gpa} 
            <h4>Reading Level: </h4> {student.reading_level} 
            <h4>Writing Level: </h4> {student.writing_level} 
            <h4>Math Level: </h4> {student.math_level} 
            <div > 
            <button onClick={handleClick}>Remove Student</button>
            </div> 
        </div>
    )
}

