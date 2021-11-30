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
    console.log(event.target.id)
    console.log(event.target.previousElementSibling.value);


    var currentHour = event.target.id
    var textDescription = event.target.previousElementSibling.value;

    // localStorage.setItem(currentHour.value , textDescription);
    localStorage.setItem(currentHour, textDescription)
}

var saveButton = document.querySelectorAll(".saveBtn");


// saveButton[0].addEventListener("click",saveTask); 
// saveButton[1].addEventListener("click",saveTask); 
// saveButton[2].addEventListener("click",saveTask); 


for (let i = 0; i < saveButton.length; i++) {
    
    saveButton[i].addEventListener("click",saveTask); 
    
}

////////////////////////////// LOADING PART

var textArea = document.querySelectorAll(".description");


// saveButton[0].addEventListener("click",saveTask); 
// saveButton[1].addEventListener("click",saveTask); 
// saveButton[2].addEventListener("click",saveTask); 


for (let i = 0; i < textArea.length; i++) {
    
    var myMessage = localStorage.getItem(i+9)

   textArea[i].value = myMessage
    
}



