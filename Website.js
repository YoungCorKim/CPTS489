// Global Variables
var homeTab = document.getElementById("home");
var profileTab = document.getElementById("profile");
var loginTab = document.getElementById("login");
var calendarTab = document.getElementById("calendars");
var createClassTab = document.getElementById("createClass");
var manageClassTab = document.getElementById("manageClass");
var createEventTab = document.getElementById("createEvent");
var importTab = document.getElementById("importSched");
var groupTab = document.getElementById("groups");
var findTab = document.getElementById("findUser");
var settingTab = document.getElementById("settings");

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

// Function to Close All Tabs By Blocking Display
function closeTabs(){
    // We Probably Should Make This an If Student, Close These / Else if Prof, Close These

    // Set All Displays to None
    homeTab.style.display = "none";
    profileTab.style.display = "none";
    loginTab.style.display = "none";
    calendarTab.style.display = "none";
    createClassTab.style.display = "none";
    manageClassTab.style.display = "none";
    createEventTab.style.display = "none";
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
function profileOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Open Correct Tab
    profileTab.style.display = "flex";
}
function calendarsOpen(){
    // Close Other Tabs First 
    closeTabs();
    // Get and Open Correct Tab
    calendarTab.style.display = "flex";
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