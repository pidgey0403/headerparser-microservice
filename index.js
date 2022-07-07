// init project
require('dotenv').config();
let express = require('express');
let app = express();


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
let cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204
app.set('trust proxy', true);

//serve static files HTML/CSS
app.use(express.static('views'));


// API endpoint for user information
app.get("/api/whoami", (req, res) => {
  res.json({ipaddress: req.ip, language: req.headers["accept-language"], 
  software: req.headers["user-agent"]});
});


// listen for requests
let listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
