const arg = process.argv[2];

const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(arg, (error, description) => {
  if (error) {
    console.log('Error! Details:\n', error);
  } else {
    console.log(description);
  }
});