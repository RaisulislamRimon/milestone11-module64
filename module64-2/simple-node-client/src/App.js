import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return <div>Users : {users.length}</div>;
};

export default App;
