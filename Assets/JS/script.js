//Array that holds the hour id's for timestamps on left of page
var hourlyCheck = $(".hour");

var store = {};

//function that brings the current date and appends it to the HTML ID currentDay
var todayDate =function() {
    var presentDay = moment().format("dddd MMM Do YYYY"); 
    $("#currentDay").append(presentDay);
}
todayDate();

//every time a user hits the save button, their input in the textarea gets saved to local storage
$(".saveBtn").on("click", function () {
    //gets the nearby values to store later.
    var textInput = $(this).siblings(".description").val();
    var timeInput = $(this).parent().attr("id");
    //places said items inside of local storage
    localStorage.setItem(timeInput, textInput);

    console.log(localStorage);
})

//function that retrieves stored data from previous submit buttons
var loadTasks =function () {
    //retrieves item from row-1 in storage
    var store = localStorage.getItem("row-1")
    //appends it to the text-1 id textarea in HTML
    $("#text-1").append(store);
    var store = localStorage.getItem("row-2")
    $("#text-2").append(store);
    var store = localStorage.getItem("row-3")
    $("#text-3").append(store);
    var store = localStorage.getItem("row-4")
    $("#text-4").append(store);
    var store = localStorage.getItem("row-5")
    $("#text-5").append(store);
    var store = localStorage.getItem("row-6")
    $("#text-6").append(store);
    var store = localStorage.getItem("row-7")
    $("#text-7").append(store);
    var store = localStorage.getItem("row-8")
    $("#text-8").append(store);
    var store = localStorage.getItem("row-9")
    $("#text-9").append(store);
}
//calls function
loadTasks();

// function that loops through the hourlyCheck array to find the hour id's, and then bases conditional statements off of the present value of time and the id's found in the array.
var Check = function() {
    //sets time for the correct hour
    var time = moment().hour();
    //will help hold id values of hourlyCheck array
    var lookup = {};
    console.log(time); 
    //for loop that scans the length of the array to find the id's
    for (var i = 0; i < hourlyCheck.length; i++) {
        lookup[hourlyCheck[i].id] = hourlyCheck[i];
        console.log(time);
        //if the id numbers are greater, or less than the value of time, they will change colors. 
        if ( hourlyCheck[i].id > time) {
            $("textarea").addClass("future")
            console.log(hourlyCheck[i].id);
        }

        else if( hourlyCheck[i].id < time){
            $("textarea").addClass("past")
        }

        else {
            $("textarea").addClass("present")
        };
    }
}   
//calls check function
Check();







