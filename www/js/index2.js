var name = localStorage.getItem("name");
var nameout = JSON.stringify(name);



var movie = localStorage.getItem("favmovie");
var movieout = JSON.stringify(movie);


var genre = localStorage.getItem("genre");
var genreout = JSON.stringify(genre);


for(var i in localStorage) {
    console.log(i + ' = ' + localStorage[i]);
}