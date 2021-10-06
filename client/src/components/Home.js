function Home({ teacher }) {

    if (teacher) {
      return <h1>Welcome, {teacher.name}!</h1>;
    } else {
      return <h2>Please Login or Sign Up</h2> && 
        <div>
            <img className = "logo-img" src = "./Images/Logo.png" alt = "e-marker-logo"/>
        </div>

    }
    
  }

  


  export default Home;