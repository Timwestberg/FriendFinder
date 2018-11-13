//     // ===============================================================================
//    // LOAD DATA
//   // We are linking our routes to a series of "data" sources.
//  // These data sources hold arrays of information on friend-data
// // ===============================================================================


  function CodePal(name,photo,favLang,github,scores) {

    this.name = name,
    
    this.photo = photo,

    this.favLang = favLang,

    this.github = github,

    this.scores = scores


  };


let palData = require("../data/friends");




module.exports = function(app) {

//         // API POST Requests
//        // Below code handles when a user submits a form and thus submits data to the server.
//       // In each of the below cases, when a user submits form data (a JSON object)
//      // ...the JSON is pushed to the appropriate JavaScript array
//    // Then the server saves the data to the tableData array)
//   // ---------------------------------------------------------------------------


//       //for loop to go through the list of the current array of pals
//       let eachTotal=[];


  app.post("/api/pals", function(req, res) {

    console.log("This is th post request taking in data")

        //API POST request for JSON information for friends.js
       //create logic to grab user's score to compare with palData
      // Holds data for current user
	  let current_user = req.body
	  
	  let newpal = new CodePal (current_user.name, current_user.photo, current_user.favLang, current_user.github, current_user.scores)

	  console.log(newpal);
	  
	  console.log(current_user)
     
      let compatiblePal;

      compatiblePal = find_match(newpal);

      palData.push(current_user);
  
      res.send(compatiblePal);

    });

    	/**
	 * Get handler for '/api/friends'
	 * Returns the current list of users.
	 */
    app.get("/api/pals", function(req, res) {
    
        res.json(palData);
    
	  });
	  
/**
	*Function that calculates the difference between the current user's score and the palData scores
*/
function calculate(scores1, scores2){
	let diff = 0;

	for(let i = 0; i < scores1.length; i++){


		diff += Math.abs( scores1[i] - scores2[i]);

	}
	console.log("returning a difference of " + diff);
	return diff;
}

/**
 *  Function to find the best coding pal for the current user
 *  || Takes in the data from the survey html
 */
function find_match(newUser){

	//  Variable for setting  the max difference a user can have is fifty for it to be considered
  let minDifference = 50;
  
	// Variable for storing the index the identifies the best matching pal in the palData array 
  let matchIndex = -1; // This is made negative one for error handling down near the bottom 

	// Iterate through list of users to find the most compatible match 
	for(let i = 0; i < palData.length; i++){

	// Variable for storing the current difference between the current user's Data and all the pals in palData
    currentDifference = calculate(newUser.scores, palData[i].scores);
	
		//  If the current difference has a difference lower than the 50...
		if(currentDifference < minDifference){

		//  than make the current difference the new minmimum difference
      minDifference = currentDifference;
	  
			// Variable updating the match index to the new lowest match
			matchIndex = i;
		}

	}

	//  if no match is found than let the userknow search has be undefined
	if(matchIndex < 0){

		return undefined;

	}

	//  Return the pal data with current user's best found match
	return(palData[matchIndex])
};

};
  
