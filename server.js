'use strict';
//1. Require the package
const express = require('express')

//2. Create express app and port
const app = express()
const port = 3000;

//http://localhost:port/
//3. Check if the server is listening to the defined port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// 1 Movie Response
// Require the data file
const movieData = require("/Users/apple/LTUC/Express_Folder/Movies-Library/Movie Data/data.json");
//Calling the method
app.get('/',homeResponse)

//a function to retrieve the data
function homeResponse(req, res) {
  let result = [];
  movieData.data.forEach(element => {
      let newMovie = new Movie(
        element.title,
        element.poster_path,
        element.overview
      );
      result.push(newMovie);
  })
  res.json(result);
}


//The constructor to create a new response from the json data file
function Movie(title, poster_path, overview) {
  this.title = title;
  this.poster_path = poster_path;
  this.overview = overview
}


// 2 Favorite page response
function favoritePage(req,res){
res.send('Welcome to Favorite Page');
}

app.get('/favorite',favoritePage);
