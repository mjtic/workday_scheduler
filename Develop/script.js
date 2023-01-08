// variables
let saveBtn = $(".saveBtn");
let workHour = [9, 10, 11, 12, 13, 14];
let hour = $(".hour");
let textBlock = $(".description");
let currentTime = $("#currentDay");
let past = $(".past");

let timeOfDay = setInterval(function () {
  let time = dayjs();
  $("#currentDay").text(
    time.format("[Today is] dddd, MMMM D[th], [Current Time:] h:mm:ss A")
  );
});







// if (time < 3) {
//   document.getElementById("hour-11").setAttribute("style", "background-color:red");
// }

// function timeBlockDisplay(){
//   textBlock.each(function(){
//     if (timeOfDay < hour) {
//       $(this).addClass("past")
//     }
//   })
// }




// var today = dayjs();
// if (dayjs("past").isBefore(timeOfDay)) {
//   document
//     .getElementsByClassName("timeblock")
//     .setAttribute("style", "background-color:red");
// } else if (today.isSame(timeOfDay)) {
//   document
//     .getElementsByClassName("timeblock")
//     .setAttribute("style", "background-color:green");
// }

// var today = dayjs();
// taskList.forEach((task) -> {
//   if (dayjs(task.reminderDate).isAfter(today))) {
//     missedFilter.push(task);
//   }
// });


// }else (time.isAfter(today)){
//   document.getElementsByClassName("timeblock").setAttribute("style", "background-color:gray");
// }

// else if (time = hour){
//   textBlock.attr('color', 'present')
// }
// else {
//   textBlock.attr('color', 'future')
// }
// console.log(textBlock);

// document.getElementById("hour-12").setAttribute("style", "background-color:red");

// function timeBlockDisplay () {
//   let time
// }
// for loop??
// for (let i = 0; i < 9; i++){
//   if (time > workHour[i].classList.add("past"));
// }

// current day timer in the header

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
// });

// Click event causes alert "Hello World"
// Vanilla JS equivalent: `addEventListener`
// alertButtonEl.on('click', function () {
//   alert('Hello World');
// });

// Takes an array of projects and saves them in localStorage.
// function saveProjectsToStorage(projects) {
//   localStorage.setItem('projects', JSON.stringify(projects));
// }
