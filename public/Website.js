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

// Search For User Function
function userNameCheck(name){
    const searchText = document.getElementById("userSearchText").value;

        // Validate that Email Has @ Symbol
        if(String(name).includes(searchText)){
            return true;
        }
        // Else Statement is Unnecessary as This Will Trigger On It's Own
        return false;
}