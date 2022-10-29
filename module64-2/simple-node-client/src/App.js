import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      <h2>Users : {users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
