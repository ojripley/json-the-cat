const arg = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

// calls the imported function from breedFetrcher.js
// passes in the search argument, and a call back that tells the function how to handle either:
// (1) the description from the requested data
// (2) an error
fetchBreedDescription(arg, (error, description) => {
  if (!error) {
    console.log(description);
  } else {
    console.log('Error! Details:\n', error);
  }
});