
/*
app dependencies
 */
let express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser");
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Initialize an app instance
const app = express()

// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'));

const port= 4000;

// Setup Server

//--------------------------------------------------------------------------------------------------



/*
Routes
 */
// return projectData
app.get("/feeling", function (req, res) {
    res.json({
        'success': true,
        'data': projectData
    });
})

// post data handler
app.post("/feeling", function (req, res) {
    const req_data = req.body,
        temp = req_data["temp"],
        content = req_data["content"],
        date = req_data["date"];
    // verify that all needed values are giving on the request
    if (temp && content && date) {
        projectData.temp = temp;
        projectData.date = date;
        projectData.content = content;
        res.json({
            "success": true,
        });
    } else {
        res.status(400).json({
            "success": false,
            "message": "Bad Request"
        });
    }
})

/*
 Server Setup
 */
// use port 4001 for testing and 4000 for development
// const port = process.env.NODE_ENV === 'test' ? 4001 : 4000;
const server = app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
});


module.exports = app