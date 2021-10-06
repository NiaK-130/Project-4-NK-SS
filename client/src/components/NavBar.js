import React from "react";
import { Link } from "react-router-dom";

function NavBar({ teacher, setTeacher }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setTeacher(null);
      }
    });
  }

  return (
    <div className = "header">
      <div className = "home-header">
        <Link to="/">Home</Link>
      </div>
      <div className = "login-signup-header">
        {teacher ? (
            <div>
                <Link to="/students">Students</Link> 
                <button onClick={handleLogoutClick}>Logout</button> 
            </div>
          

        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
