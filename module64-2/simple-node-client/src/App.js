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
      <h2>User Form</h2>
      <form>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" id="name" placeholder="name" />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" placeholder="email" />
        <br />
        <input type="submit" value="Add user" />
      </form>
      <h3>Users : {users.length}</h3>
      <div>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
