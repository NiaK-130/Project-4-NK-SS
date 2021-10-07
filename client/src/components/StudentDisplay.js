import React from "react";

export default function StudentDisplay({student, deleteStudent}) {

    function handleClick() {
        deleteStudent(student.id)
    }

    return (
        <div >
            <img className = "student-image" src={student.image} alt={student.image}/>
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

