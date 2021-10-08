import React from "react";


function Home({ teacher }) {

    if (teacher) {
      return <div>
                <h1>Welcome, {teacher.name}!</h1>
                <h3> Grade Level: {teacher.grade_level}</h3> 
                <img className = "teacher-image" src={teacher.image_link} alt="teacherimage"/>

                <div>
                    </div>
                    <div className = "reminders-block">
                        <h3>Reminders:</h3>
                        <p>{teacher.reminders}</p>
                    </div>

                    <div className = "lesson-plan-block">
                        <h4>Weekly Lesson Plan:</h4>
                        <p>{teacher.lesson_plan}</p>
                    </div>


                    <div className = "additional-image-block">
                    <img className = "additional-image" src={teacher.additional_image1} alt="additionalimage"/>
                    <img className = "additional-image" src={teacher.additional_image1} alt="additionalimage"/>
                    <img className = "additional-image" src={teacher.additional_image1} alt="additionalimage"/>
                    <img className = "additional-image" src={teacher.additional_image1} alt="additionalimage"/>
                    <img className = "additional-image" src={teacher.additional_image1} alt="additionalimage"/>
                    </div>

                </div>


    } else {
      return <div>
            <img className = "logo-img" src = "./Images/Logo.png" alt = "e-marker-logo"/>
            <h5 className = "home-page-desc"> The number one online platform for teachers to track students progress and activities   </h5> 
            <h5 className = "footer-text">Terms & Conditions   |    Privacy Policy    |    Notice of Privacy Practices    |    Consents  </h5>

        </div>

    }
    
  }

  


  export default Home;