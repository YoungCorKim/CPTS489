// Global Variables
var homeTab = document.getElementById("home");
var loginTab = document.getElementById("login");
var calendarTab = document.getElementById("calendars");
var createClassTab = document.getElementById("createClass");
var manageClassTab = document.getElementById("manageClass");
var createEventTab = document.getElementById("createEvent");
var manageEventTab = document.getElementById("manageEvent");
var importTab = document.getElementById("importSched");
var groupTab = document.getElementById("groups");
var findTab = document.getElementById("findUser");
var settingTab = document.getElementById("settings");

// Current Date
let today = new Date;
let thisMonth = today.getMonth();
let thisYear = today.getFullYear();

// Months
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Login Confirmation
function loginCheck(){
    var usernameText = document.getElementById("username").value;
    var passwordText = document.getElementById("password").value;

    // Check if User/Password is In System
    // Impliment At Later Date
    if(false){

    }
    // Alert User if Information is Incorrect With Text Under Login
    else{
        // Get Error Text
        var errorText = document.getElementById("loginErrorText");

        // Change Error Text
        errorText.innerHTML = [`${"Your Username or Password is Incorrect"}`]

        // Make Text Visible
        errorText.style.display = "flex";
    }
}

// Show Password Function
function passwordToggle(){
    var toggle = document.getElementById("passwordToggle");
    var passwordText = document.getElementById("password");
    // If Checked, Show Password
    if(toggle.checked){
        passwordText.type = "text";
    }
    else{
        passwordText.type = "password";
    }
}

// Calendar Functions

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

// Function to Close All Tabs By Blocking Display
function closeTabs(){
    // We Probably Should Make This an If Student, Close These / Else if Prof, Close These

    // Set All Displays to None
    homeTab.style.display = "none";
    loginTab.style.display = "none";
    calendarTab.style.display = "none";
    createClassTab.style.display = "none";
    manageClassTab.style.display = "none";
    createEventTab.style.display = "none";
    manageEventTab.style.display= "none";
    importTab.style.display = "none";
    groupTab.style.display = "none";
    findTab.style.display = "none";
    settingTab.style.display = "none";
}

// Functions For Opening Individual Tabs
function homeOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Open Correct Tab
    homeTab.style.display = "flex";
}
function loginOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Open Correct Tab
    loginTab.style.display = "flex";
}
function calendarsOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Get and Open Correct Tab
    calendarTab.style.display = "flex";
    // Also Render Calendar
    renderCal(thisMonth, thisYear);
}
function createClassOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Open Correct Tab
    createClassTab.style.display = "flex";
}
function manageClassOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Open Correct Tab
    manageClassTab.style.display = "flex";
}
function createEventOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Open Correct Tab
    createEventTab.style.display = "flex";
}
function manageEventOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Open Correct Tab
    manageEventTab.style.display = "flex";
}
function importSchedOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Open Correct Tab
    importTab.style.display = "flex";
}
function groupOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Open Correct Tab
    groupTab.style.display = "flex";
}
function findOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Open Correct Tab
    findTab.style.display = "flex";
}
function settingsOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Open Correct Tab
    settingTab.style.display = "flex";
}