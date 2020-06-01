//Array that holds the hour id's for timestamps on left of page
var hourlyCheck = $(".hour");

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







