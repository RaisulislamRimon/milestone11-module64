const app = require("express")();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const users = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
  { id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
  { id: 3, name: "John Smith", email: "johnsmith@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
