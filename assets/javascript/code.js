$( document ).ready(function() {
    console.log( "ready!" );

/////////////////////////////////
//GLOBAL VARS
var trainName;
var destination;
var trainTime;
var frequency;
/////////////////////////////////


// var firebaseConfig = {
//     apiKey: "AIzaSyDEAbD0Ab9Y7m8jl2WlQd43bhYEgTwbSiI",
//     authDomain: "my-first-project-e948b.firebaseapp.com",
//     databaseURL: "https://my-first-project-e948b.firebaseio.com",
//     projectId: "my-first-project-e948b",
//     storageBucket: "my-first-project-e948b.appspot.com",
//     messagingSenderId: "507381953397",
//     appId: "1:507381953397:web:81176ef1a8a08cfaec193c"
//     };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// var database = firebase.database();
//////////////////////////////////

//When document is loaded write all stored data on the page

//when submit is clicked values of all inputs are stored to variables
$("#submit").on("click", function(){
    trainName = $("#trainName").val();
    destination = $("#destination").val();
    trainTime = $("#trainTime").val();
    frequency = $("#frequency").val();

//values are appended to table
var newTrain = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(trainTime),
    $("<td>").text(frequency)
);
$("#tableBody").append(newTrain);
});
//
















});