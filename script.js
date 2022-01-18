let currentDay = $("#currentDay");

var hour = 0;

var input1 = localStorage.getItem("input1");


var input2 = localStorage.getItem("input2");


var input3 = localStorage.getItem("input3");


var input4 = localStorage.getItem("input4");


var input5 = localStorage.getItem("input5");


var input6 = localStorage.getItem("input6");


var input7 = localStorage.getItem("input7");


var input8 = localStorage.getItem("input8");


var input9 = localStorage.getItem("input9");


document.getElementById('input1').value = input1

document.getElementById('input2').value = input2

document.getElementById('input3').value = input3

document.getElementById('input4').value = input4

document.getElementById('input5').value = input5

document.getElementById('input6').value = input6

document.getElementById('input7').value = input7

document.getElementById('input8').value = input8

document.getElementById('input9').value = input9



function updateTime() {
  let time = moment().format("dddd, MMMM Do YYYY - h:mm:ss a");
  //   hour = moment().format("h")
  currentDay.text(time);
}

setInterval(updateTime, 1000);

function save() {
input1 = document.getElementById('input1').value;
localStorage.setItem("input1", input1)


input2 = document.getElementById('input2').value;
localStorage.setItem("input2", input2)

input3 = document.getElementById('input3').value;
localStorage.setItem("input3", input3)

input4 = document.getElementById('input4').value;
localStorage.setItem("input4", input4)

input5 = document.getElementById('input5').value;
localStorage.setItem("input5", input5)
  

input6 = document.getElementById('input6').value;
localStorage.setItem("input6", input6)


input7 = document.getElementById('input7').value;
localStorage.setItem("input7", input7)


input8 = document.getElementById('input8').value;
localStorage.setItem("input8", input8)


input9 = document.getElementById('input9').value;
localStorage.setItem("input9", input9)
}

function updateSchedule() {
  hour = moment().format("h");

  if (hour == '9') {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("future");
    $("#9").addClass("present");
  }
  else if (hour == "10") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future").addClass("present");
  }
  else if (hour == "11") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future present").addClass("past");
    $("#11").removeClass("future").addClass("present");
  }
  else if (hour == "12") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future present").addClass("past");
    $("#11").removeClass("future present").addClass("past");
    $("#12").removeClass("future").addClass("present");
  }
  else if (hour == "1") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future present").addClass("past");
    $("#11").removeClass("future present").addClass("past");
    $("#12").removeClass("future present").addClass("past");
    $("#1").removeClass("future").addClass("present");
  }
 else if (hour == "2") {
    $(".time-block > div").removeClass("past present future");
    $(".time-block > div").addClass("future");
    $("#9").removeClass("present future").addClass("past");
    $("#10").removeClass("future present").addClass("past");
    $("#11").removeClass("future present").addClass("past");
    $("#12").removeClass("future present").addClass("past");
    $("#1").removeClass("future present").addClass("past");
    $("#2").removeClass("future").addClass("present");
  }
  else if (hour == "3") {
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
  else if (hour == "4") {
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
  else if (hour == "5") {
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
  else {
    $(".time-block > div").removeClass("present past").addClass("future");
  }
}

setInterval(updateSchedule, 1000);
