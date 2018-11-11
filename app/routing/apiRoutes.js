    // ===============================================================================
   // LOAD DATA
  // We are linking our routes to a series of "data" sources.
 // These data sources hold arrays of information on friend-data
// ===============================================================================



const palData = require("../data/friends");




module.exports = function(app) {

app.get("/api/pals", function(req, res) {

    res.json(palData);

  });




        // API POST Requests
       // Below code handles when a user submits a form and thus submits data to the server.
      // In each of the below cases, when a user submits form data (a JSON object)
     // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
   // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------
  app.post("/api/pals", function(req, res) {

 //API POST request for JSON information for friends.js
//create logic to grab user's score to compare with friendsData
      let unsortedMatch =[];

      //grab results from user's survery
      let newPal = req.body;

      console.log(newPal);

      //create object for best match
      let codePal = {

          name: "",

          photo: "",

          favLang:"",

          github:"",

          friendDiff: 0
      };

      //for loop to go through the list of the current array of pals
      for (let i = 0; i < palData.length; i++){


          //loop through the scores of the current array of pals
          for (let j = 0; j < palData[i].scores[j]; j++){

              //calculate the difference between the scores and sum the numbers for total difference
              let palScores = newPal.scores;

              difference += Math.abs(parseInt(palScores[j])-parseInt(palData[i].scores[j]));

              if(difference <= codePal.friendDiff){

                  //set the best friend finder to the for looped friendData
                  codePal.name = friendsData[i].name;

                  codePal.photo = friendsData[i].photo;

                  codePal.favLang = friendsData[i].favLang;

                  codePal.github = friendsData[i],github;

                  codePal.friendDiff = difference;
              }
          }
      };


              //pushes new submission to array
              palData.push(newFriend);



      //pushes new submission to array
      unsortedMatch.push(codePal);


    let sortMatches = unsortedMatch.sort(function(a, b){return a.friendDiff - b.friendDiff});

    let compartativeDiff = sortMatches[0].difference;

    let closestMatch = [];

    for (i=0; i < sortMatches.length; i++)   {

        if (sortMatches[i].difference > compartativeDiff) 
        
        return closestMatch;

        else {

            closestMatch.push(sortMatches[i]);    

    }};

        //returns json with code Pal match
        res.json(closestMatch);

    
  })





app.post("/api/clear", function (req, res) {
  // Empty out the arrays of data
  palData.length = [];
  res.json({ ok: true });
});


};

// addScores();
// // Function for adding the scores in an array

// function addScores(){

//   // the scores totaled in an array
//   let eachTotal=[];

  
//  let userScore = req.body

//  console.log(userScore.scores)

//   // Function for adding the scores in an array
//   for(let i = 0;i < palData.length; i++) {

//     // letiable that stores all the score arrays for each pal
//     let allDataScores = palData[i].scores;

//     console.log(allDataScores)

//     // letiable that stores the sum of the pals score from the survey
//     // Found the below way of adding in from the below
//     // https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
//     let finalScore = allDataScores.reduce((a, b) => a + b, 0);

//     console.log(finalScore)

//     // Push each total for the users to a seperate array to be compared against
//     eachTotal.push(finalScore)

//     // console.log(eachTotal);

//   }

//   // Display the scores totaled in an array
//   console.log(eachTotal);

// };
