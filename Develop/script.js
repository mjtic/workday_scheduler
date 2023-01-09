// variables
let saveBtn = $(".saveBtn");
let workHour = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
let currentTime = new Date();


// https://www.w3schools.com/jsref/jsref_sethours.asp

setInterval (function (){
  let time = dayjs();
  $('#currentDay').text(time.format('[Today is] dddd, MMMM D[th], [Current Time:] h:mm:ss a'));
}
)


console.log("current time: " + currentTime.toString("HH:mm:ss"));
for (let i = 0; i < workHour.length; i++) {
  let officeTime = new Date();
  officeTime.setHours(workHour[i],0,0)
  let officeTimeAfter = new Date();
  officeTimeAfter.setHours(workHour[i]+1,0,0)

  console.log(workHour[i])
  if (currentTime >= officeTime && currentTime <officeTimeAfter){
    console.log('present');
    addClass.(".present")
  }
}

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
