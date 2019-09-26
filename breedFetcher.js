const request = require('request');

// after refactor
// is now an async function that is exported and the ncalled by index.js
const fetchBreedDescription = function(searchFor, callback) {
  const searchURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + searchFor;
  request(searchURL, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (data[0] !== undefined) {
        // callback is used in variopus places to handle various scenarios
        callback(null, data[0].description.trim());
      } else {
        // made my own error message here since a cat not found does not actually result in one
        callback('The kitty you requested does not exist in our records!', null);
      }
    } else {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };




// before refactor


// request(searchURL, (error, response, body) => {
//   if (!error) {
//     if (response.statusCode === 200) {
//       const data = JSON.parse(body);
//       if (data[0] !== undefined) {
//         console.log(data[0].description);
//       } else {
//         console.log('The kitty you requested does not exist in our records!');
//       }
//     } else {
//       console.log('Something went wrong!\nResponse status code:', response.statusCode);
//     }
//   } else {
//     console.log(error);
//   }
// });