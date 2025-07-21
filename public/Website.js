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