import UserService from "./services/UserService";


const express = require('express');
const app = express();

var userSvc = UserService.getInstance();

// Fill the userSvc with mock users just for now
userSvc.populateMockUsers();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

