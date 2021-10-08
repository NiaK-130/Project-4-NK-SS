export default function StudentDisplay({student, deleteStudent}) {

    function handleClick() {
        deleteStudent(student.id)
    }

    return (
        <div className = "student-display-container" >
            <img className = "student-image" src={student.image} alt={student.image}/>
            <div className = "student-info">
            <h2>{student.name}</h2>
            <h4 className = "student-display-text" >Email: {student.email} </h4> 
            <h4 className = "student-display-text">Home Address: {student.home_address} </h4> 
            <h4 className = "student-display-text">GPA: {student.gpa} </h4>  
            <h4 className = "student-display-text">Reading Level: {student.reading_level} </h4> 
            <h4 className = "student-display-text">Writing Level: {student.writing_level}  </h4> 
            <h4 className = "student-display-text">Math Level: {student.math_level} </h4> 
            </div>
            <div > 
            <button className = "remove-Student-Button" onClick={handleClick}>Remove Student</button>
            </div> 
        </div>
    )
}



// function Home({ teacher }) {

//     if (teacher) {
//       return <h1>Welcome, {teacher.name}!</h1>;
//     } else {
//       return <div>
//             <img className = "logo-img" src = "./Images/Logo.png" alt = "e-marker-logo"/>
//             <h4 className = "home-page-desc"> The number one online platform for teachers to track students progress and activities   </h4> 
//             <h5 className = "footer-text">Terms & Conditions   |    Privacy Policy    |    Notice of Privacy Practices    |    Consents  </h5>

//         </div>

//     }
    
//   }

