const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const users = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
  { id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
  { id: 3, name: "John Smith", email: "johnsmith@gmail.com" },
  { id: 4, name: "Mr Anderson", email: "anderson@gmail.com" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name;
    const filtered = users.filter(
      (usr) => usr.name.toLowerCase().indexOf(search) >= 0
    );
    res.send(filtered);
  }
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api called");
  console.log(req.body);
  // res.send("post api called response send");
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  console.log(user);
  console.log(req.body);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
