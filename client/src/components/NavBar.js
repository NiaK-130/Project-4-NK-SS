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
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {teacher ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
