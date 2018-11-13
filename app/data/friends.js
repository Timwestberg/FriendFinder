// ===============================================================================

// But you could have it be an empty array as well.
// ===============================================================================

var palArray = [
{
  name:"Tim Dodle",
  photo:"#",
  favLang:"Java",
  github:"www.github.com.timdoodle",
  scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
},
{
  name:"Dulce Dodle",
  photo:"#",
  favLang:"Python",
  github:"www.github.com/dulcedoodle",
  scores:[
      3,
      5,
      2,
      2,
      3,
      1,
      2,
      3,
      2,
      4
    ]
}
  ];

  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = palArray;
  