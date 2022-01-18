let currentDay = $("#currentDay");
let rowOne = $("#9");
var hour = 0;

function updateTime() {
  let time = moment().format("dddd, MMMM Do YYYY - h:mm:ss a");
  //   hour = moment().format("h")
  currentDay.text(time);
}

setInterval(updateTime, 1000);

function save() {
  event.preventDefault;
  console.log("hi");
}

function updateSchedule() {
  hour = moment().format("h");

  if (hour == "9") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("future");
    $("#9").addClass("present");
  }
  if (hour == "10") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future").addClass("present");
  }
  if (hour == "11") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future present").addClass("past");
    $("#11").removeClass("future").addClass("present");
  }
  if (hour == "12") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future present").addClass("past");
    $("#11").removeClass("future present").addClass("past");
    $("#12").removeClass("future").addClass("present");
  }
  if (hour == "1") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future present").addClass("past");
    $("#11").removeClass("future present").addClass("past");
    $("#12").removeClass("future present").addClass("past");
    $("#1").removeClass("future").addClass("present");
  }
  if (hour == "2") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future present").addClass("past");
    $("#11").removeClass("future present").addClass("past");
    $("#12").removeClass("future present").addClass("past");
    $("#1").removeClass("future present").addClass("past");
    $("#2").removeClass("future").addClass("present");
  }
  if (hour == "3") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future present").addClass("past");
    $("#11").removeClass("future present").addClass("past");
    $("#12").removeClass("future present").addClass("past");
    $("#1").removeClass("future present").addClass("past");
    $("#2").removeClass("future present").addClass("past");
    $("#3").removeClass("future").addClass("present");
  }
  if (hour == "4") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future present").addClass("past");
    $("#11").removeClass("future present").addClass("past");
    $("#12").removeClass("future present").addClass("past");
    $("#1").removeClass("future present").addClass("past");
    $("#2").removeClass("future present").addClass("past");
    $("#3").removeClass("future present").addClass("past");
    $("#4").removeClass("future").addClass("present");
  }
  if (hour == "5") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future present").addClass("past");
    $("#11").removeClass("future present").addClass("past");
    $("#12").removeClass("future present").addClass("past");
    $("#1").removeClass("future present").addClass("past");
    $("#2").removeClass("future present").addClass("past");
    $("#3").removeClass("future present").addClass("past");
    $("#4").removeClass("future present").addClass("past");
    $("#5").removeClass("future").addClass("present");
  }
}

setInterval(updateSchedule, 1000);
