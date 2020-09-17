// Added date and time
var d = new Date();
document.getElementById("currentDay").innerHTML = d;

// added the local storage 
// if (typeof (Storage) !== "undefined") {
// localStorage.setItem("textarea", "comments");
// document.getElementById("result").innerHTML = localStorage.getItem("textarea");
// } else {
// document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
// }
// Created the save button to show when its been clicked and also made it so the comments in the textarea are saved to local storage even when the page refreshes.
$(".saveBtn").on("click", function () {
    var id = $(this).attr("id")
    var time = id.split("-")[1]
    var i = $("#txt-" + time).val()
    console.log(id, time, "txt-" + time, i)
    localStorage.setItem(time, i)
})
// program runs through all of the hours and tells the program what color the hour needs to be, we did this by utilizing military time
var currentHour = moment().hour()
for (var i = 9; i <= 17; i++) {
    var planner = localStorage.getItem(i)
    $("#txt-" + i).val(planner)
    if (currentHour < i) {
        $("#txt-" + i).addClass("future")
    } else if (currentHour > i) {
        $("#txt-" + i).addClass("past")

    } else {
        $("#txt-" + i).addClass("present")

    }
}