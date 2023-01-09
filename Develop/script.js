// variables
let saveBtn = $(".saveBtn");
let workHour = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
let currentTime = new Date();

//display time and date
setInterval(function () {
  let time = dayjs();
  $("#currentDay").text(
    time.format("[Today is] dddd, MMMM D[th], [Current Time:] h:mm:ss a")
  );
});

//calling out undateTextArea function to start the page
updateTextArea();

//for loop to setHour( present/future )
for (let i = 0; i < workHour.length; i++) {
  let officeTime = new Date();
  officeTime.setHours(workHour[i], 0, 0);
  let officeTimeAfter = new Date();
  officeTimeAfter.setHours(workHour[i] + 1, 0, 0);

  //if statement to define present/past/future
  if (currentTime >= officeTime && currentTime < officeTimeAfter) {
    $("#time_" + workHour[i]).addClass("present");
  } else if (currentTime > officeTime) {
    $("#time_" + workHour[i]).addClass("past");
  } else {
    $("#time_" + workHour[i]).addClass("future");
  }
}
//defined save button
const saveBtns = document.querySelectorAll(".saveBtn");
//.forEach fucntion for click event on each individual buttons to store value in the localStorage.
saveBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var scheduleValue = $(this).siblings("textarea")[0].value;
    localStorage.setItem(this.id, scheduleValue);
  });
});

function updateTextArea() {
  for (let i = 0; i < workHour.length; i++) {
    //getting store values from all
    let localStorageValue = localStorage.getItem(workHour[i]);
    //defined textAreaEL = text area of specific workHour
    let textAreaEl = document.getElementById("time_" + workHour[i]);
    //if any of the workHour is empty removeItem from localStorage, if exist getItem.
    //this if-statement will help persist and/or remove from storage.
    if (localStorageValue === "") {
      localStorage.removeItem(workHour[i]);
    } else {
      textAreaEl.value = localStorageValue;
    }
  }
}
