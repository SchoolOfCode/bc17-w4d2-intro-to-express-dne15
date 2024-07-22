import express from "express"; //importing express from the express npm
const app = express(); //setting the app as a variable of the express npm
const port = 3000; //setting the 3000 port as a varaible

const jsonObject = {
  name: "Dionne",
  age: 29,
};

//defining the route handler for GET requests made to route URL "/" of the app
app.get("/", (req, res) => {
  //callback function. req = request object HTTP request,
  // res = response object, response back to client
  res.send("Hello World!"); //response sending back hello world to client
});

//listen to start the server on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log(jsonObject);
