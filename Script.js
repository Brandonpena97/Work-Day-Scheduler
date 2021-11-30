var data = moment().format("dddd, MMMM Do h:mm a");
console.log(data)

var currentDayEl = document.querySelector("#currentDay")
currentDayEl.textContent = data 




// getting all time-block elements
var allTimeBlocksEl = document.querySelectorAll('.description');


/// setup for checking time

// var currentHour = moment().format("H")
var currentHour = moment().format("H")

console.log(currentHour)

var timeArrays = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let index = 0; index < timeArrays.length; index++) {

    var currentTimeBlock = allTimeBlocksEl[index];

    console.log(timeArrays[index])

    var timeBlock = timeArrays[index]

    if(timeBlock < currentHour) {
        console.log("This is in the past!")
        currentTimeBlock.classList.add("past") 

    } else if (timeBlock == currentHour) {
        console.log("This is the present!")
        currentTimeBlock.classList.add("present")

    } else {
        console.log("This is the future!")
        currentTimeBlock.classList.add("future")
    }
    
}

function saveTask(event) {
    console.log(event.target.previousSibling.value);
    
    var currentHour = document.querySelector(".hour");
    var textDescription = document.querySelector(".description");

    localStorage.setItem(currentHour.value , textDescription.textContent);
}

var saveButton = document.querySelector(".saveBtn");

for (let index = 0; index < saveButton.length; index++) {
    
    saveButton[index].addEventListener("click",saveTask); 
    
}


