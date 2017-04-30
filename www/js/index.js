//Variable for location data
var watchID;

//Location Settings
var locationOptions = { 
	maximumAge: 10000, 
	timeout: 6000, 
	enableHighAccuracy: true 
};

//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
    console.log(navigator.notification);
}

//Gets local storage item "name" to display in bio
var getnamestring = localStorage.getItem("name");
var nameout = JSON.stringify(getnamestring);

//Gets local storage item "favmovie" to display in bio
var movie = localStorage.getItem("favmovie");
var movieout = JSON.stringify(movie);

//Gets local storage item "genre" to display in bio
var genre = localStorage.getItem("genre");
var genreout = JSON.stringify(genre);


	//set up listener for button clicks
 	$('#startLocationButton').on('click', updatePosition);
    $('#stopLocationButton').on('click', stopPosition);
    $('#stopLocationButton').on('click', vibration2);
	$('#startLocationButton').on('click', vibration);
    $('#startLocationButton').on('click', notifyon);
    $('#stopLocationButton').on('click', notify);
    $('#deleteButton').on('click', deleteData);
   
	
	//change time box to show message
	$('#time').val("Press the button to get location data");
	
});



//Call this function when you want to watch for chnages in position
function updatePosition() {
	
	//change time box to show updated message
	$('#time').val("Getting data...");
	
	//instruct location service to get position with appropriate callbacks
	watchID = navigator.geolocation.watchPosition(successPosition, failPosition, locationOptions);
}

//Call this function when you want to watch for chnages in position
function stopPosition() {
	
	//change time box to show updated message
	$('#time').val("Press the button to get location data");
	
	//instruct location service to get position with appropriate callbacks
	navigator.geolocation.clearWatch(watchID);
}


//called when the position is successfully determined
function successPosition(position) {
	
	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	var time = position.timestamp;
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	//OK. Now we want to update the display with the correct values
	$('#time').val("Recieved data at " + time);
	$('#lattext').val(latitude);
	$('#longtext').val(longitude);
	
}

//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);
	
}

//Vibrates device once only
function vibration() {
   var time = 1000;
   navigator.vibrate(time);
}

//Vibrates device twice
function vibration2() {
   var pattern = [1000, 1000, 1000, 1000];
   navigator.vibrate(pattern);
}

//Informs user that location services has started
function notifyon() {
  alert("You have started local services");
	
}

//Informs user that location services has stopped
function notify() {
  alert("You have stopped local services");
}


for(var i in localStorage) {
    console.log(i + ' = ' + localStorage[i]);
}

//When user enters name, it stores entered data in local storage. Function also fetches the new value and converts to string to dislay in bio
function storename(){
	 
     var inputName = document.getElementById("name");
     localStorage.setItem("name", inputName.value);
	 alert("Your name details have been updated");
	 var names = localStorage.getItem("name");
	 var nameout = JSON.stringify(names);
	 var nameout;
	 document.getElementById("1").innerHTML = names;
	 }

//When user enters fav movie, it stores entered data in local storage. Function also fetches the new value and converts to string to dislay in bio   
function storemov(){
	 
     var inputMovie= document.getElementById("movie");
     localStorage.setItem("favmovie", inputMovie.value);
	 alert("Movie preference updated");
	 alert("Your favourite movie is:");
	 alert(localStorage.getItem("favmovie"));
	 var movnames = localStorage.getItem("favmovie");
	 var movout = JSON.stringify(movnames);
    
	 document.getElementById("2").innerHTML = movnames;
	 
    }
//When user enters fav genre, it stores entered data in local storage. Function also fetches the new value and converts to string to dislay in bio 	
function storegenre(){
	 
     var inputGenre = document.getElementById("genre");
     localStorage.setItem("genre", inputGenre.value);
	 alert("Your genre preference has been changed");
	 alert("You like " + inputGenre.value);
	 var gennames = localStorage.getItem("genre");
	 var genout = JSON.stringify(gennames);
	 document.getElementById("3").innerHTML = gennames;
	 alert(gennames);
	 }

//Used to delete user data via settings menu. Clears all local storage values on mobile device 	 
function deleteData() {
  localStorage.clear();
  alert("Your user data has been deleted");
	
}