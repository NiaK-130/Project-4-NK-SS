function Home({ teacher }) {
    if (teacher) {
      return <h1>Welcome, {teacher.username}!</h1>;
    } else {
      return <h1>Please Login or Sign Up</h1>;
    }
  }
  
  export default Home;