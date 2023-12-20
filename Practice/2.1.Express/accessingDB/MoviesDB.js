const express = require('express');
const bodyParser = require('body-parser'); // Add this line to parse the request body
const app = express();
app.use(bodyParser.json()); // Add this line to parse JSON requests

const users = [{
  name: "Lokesh",
  movies: [{
    good: true
  }, {
    good: false
  }]
}];

app.get('/', function (req, res) {
  const lokeshmovies = users[0].movies;
  const numberofmovies = lokeshmovies.length;
  let numberofgoodmovies = 0;
  for (let i = 0; i < lokeshmovies.length; i++) {
    if (lokeshmovies[i].good) {
      numberofgoodmovies += 1; // Simplified this line
    }
  }
  const numberofbadmovies = numberofmovies - numberofgoodmovies;
  res.json({
    numberofmovies,
    numberofgoodmovies,
    numberofbadmovies
  });
});

app.post('/', function (req, res) {
  const isgood = req.body.isgood;
  users[0].movies.push({
    good: isgood
  });
  res.json({
    msg: "Done!"
  });
});

app.put('/', function (req, res) {
  // Implement the logic for the PUT request here
});

app.delete('/', function (req, res) {
  // Implement the logic for the DELETE request here
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
