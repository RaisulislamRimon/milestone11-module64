import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(name, email);
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    form.reset();
  };

  return (
    <div className="App">
      <h2>User Form</h2>
      <form onSubmit={handleAddUser}>
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
