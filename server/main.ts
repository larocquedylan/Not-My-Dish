import UserService from "./services/UserService";
import { UserController } from "./controllers/UserController";
import { HouseController } from "./controllers/HouseController";


const express = require('express');
const app = express();

var userSvc = UserService.getInstance();

// Fill the userSvc with mock users just for now
userSvc.populateMockUsers();

// This line is necessary to parse the body of incoming JSON requests
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/users', (req, res) => {
  UserController.SignUpHandler(req, res);
});

app.post ('/house', (req, res) => {
  HouseController.HouseHandler(req, res);

})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

