// Dependencies
// =============================================================

var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");


// Sets up the Express App
// =============================================================

var app = express();

var PORT = process.env.PORT || 3013;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.

// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routing/apiRoutes")(app);

require("./routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);

  });
  