// Current Date
let today = new Date;
let thisMonth = today.getMonth();
let thisYear = today.getFullYear();

// Months
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Next and Back Buttons
const backButton = document.getElementById("back");
backButton.addEventListener("click", () =>{
    thisMonth--;
    if (thisMonth < 0){
        thisMonth = 11;
        thisYear--;
    }
    // Re-render the Calendar
    renderCal(thisMonth, thisYear);
});


const nextButton = document.getElementById("next");
nextButton.addEventListener("click", () =>{
    thisMonth++;
    if (thisMonth > 11){
        thisMonth = 0;
        thisYear++;
    }
    // Re-render the Calendar
    renderCal(thisMonth, thisYear);
});

// Calendar Rendering
function renderCal(month, year){
    // Clear Current Dates
    var calDatesHTML = document.getElementById("calDates");
    calDatesHTML.innerHTML = [];

    // Set Header Text
    let displayMonthYear = document.getElementById("currentMonthYear");
    displayMonthYear.innerHTML = `${months[month]} ${year}`

    // Get First Day & Next Month's First Day
    var firstDay = new Date(year, month, 1).getDate();
    var endDay = new Date(year, month + 1, 0).getDate();

    // Create Buffer Dates Up to First Date
    for (let i = 0; i < firstDay; i++){
        var buffer = document.createElement("div");
        calDatesHTML.appendChild(buffer);
    }

    // Add Days Within Boundary Dates
    for (let j = 1; j <= endDay; j++){
        var newDay = document.createElement("div");
        newDay.textContent = j;
        calDatesHTML.appendChild(newDay);
    }
}

// Creating Event Functions

// Reoccuring Event Toggle Function
function reoccuringEventToggle(status){
    var dateDropdown = document.getElementById("eventDates");
    var eventDateText = document.getElementById("eventDateText");

    // If the Toggle Is Set to No, Hide Date Dropdown
    if(status == "on"){
        dateDropdown.innerHTML= [
        '<div class="p boldFont">',
            'Days This Event Will Be Held On',
        '</div>',
        '<div class="dateSelect">',
            '<div>',
                '<input type="checkbox" id="eventMon">',
                '<label for="eventMon">Monday</label>',
            '</div>',
            '<div>',
                '<input type="checkbox" id="eventTue">',
                '<label for="eventTue">Tuesday</label>',
            '</div>',
            '<div>',
                '<input type="checkbox" id="eventWed">',
                '<label for="eventWed">Wednesday</label>',
            '</div>',
            '<div>',
                '<input type="checkbox" id="eventThu">',
                '<label for="eventThu">Thursday</label>',
            '</div>',
            '<div>',
                '<input type="checkbox" id="eventFri">',
                '<label for="eventFri">Friday</label>',
            '</div>',
        '</div>'
            ].join('');

        // Also Update Event Date Text
        eventDateText.innerHTML = ['Start Date of Event'];
    }
    else{
        dateDropdown.innerHTML = [];
        eventDateText.innerHTML = ['Date of Event'];
    }
}

document.addEventListener("DOMContentLoaded", function () {
    renderCal(thisMonth, thisYear);
});