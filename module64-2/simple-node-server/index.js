const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const users = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
  { id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
  { id: 3, name: "John Smith", email: "johnsmith@gmail.com" },
  { id: 4, name: "Mr Anderson", email: "anderson@gmail.com" },
];

// username : dbUser1
// password : KAaPKeGRVYXNtZcD

const uri =
  "mongodb+srv://dbUser1:KAaPKeGRVYXNtZcD@cluster0.q2puyhe.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db("simpleNode").collection("users");
    const user = { name: "mahiya mahi", email: "mahi@gmail.com" };
    const result = await userCollection.insertOne(user);
    console.log(result);
  } catch {}
}

run().catch((error) => console.log(error));

// client.connect((err) => {
//   const collection = client.db("simpleNode").collection("users");
//   // perform actions on the collection object
//   console.log("database connected");
//   client.close();
// });

app.get("/users", (req, res) => {
  if (req.query.name) {
    // console.log(req);
    // console.log(req.query);
    // console.log(req.query.name);
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
