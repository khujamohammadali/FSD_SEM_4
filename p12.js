//write file with one json object haveing keys name and place 
//read the file and display user's anme in console

const fs3 = require('fs');
const user = {
  name: "abc",
  place: "Ahmedabad"
};

fs3.writeFileSync('user4.json', JSON.stringify(user));

console.log("User's name is:", user.name.toString());
