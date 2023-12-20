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

//Add new Movies!
app.post('/', function (req, res) {
  const isgood = req.body.isgood;
  users[0].movies.push({
    good: isgood
  });
  res.json({
    msg: "Done!"
  });
});

//Update all bad movies into good movies!
app.put('/', function (req, res) {
  for(let i=0;i<users[0].movies.length;i++){
    users[0].movies[i].good = true;
  }
  res.json({});
});

//Removing all bad movies!
app.delete('/', function (req, res){
    const newmovies = [];
    for(let i=0;i<users[0].movies.length;i++){
        if(users[0].movies[i].good){
            newmovies.push({
                good: true
            })
        }
    }
    users[0].movies = newmovies;
    res.json({msg: "Done!"});
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
