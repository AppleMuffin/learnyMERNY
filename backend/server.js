//import express and cors
import express from "express";
import cors from "cors";

//this imports a file that is to be created, presumably from mongodb - the restaurants folder
import restaurants from "./api/restaurants.route.js";

// make express app
const app = express();

// apply 'middleware' the things express uses: cors module + letting sever accept json in the body of the request (like in a POST or git request to the server - server can read it)
app.use(cors());
app.use(express.json());

//establish initial routes - initial url
//general practice for api urls is api/version/api-name
//ex localhost8000/api/version/api-name
app.use("/api/v1/restaurants", restaurants); // second argument is the file the routes are located. 

//going to any other url returns a 404 not found error
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

//exporting app as a module. can then import this module in a file that accesses the database. that file is the one that is actually going to be used to get the server running
//just wanna separate our main code from our server code
export default app