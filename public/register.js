// Login Confirmation
function signUpCheck(){
    var usernameCheck = document.getElementById("usernameReg").value;
    var password1 = document.getElementById("passwordReg1").value;
    var password2 = document.getElementById("passwordReg2").value;

    // Check if User/Password is In System
    if(users.contains(usernameCheck)){

    }
    // Alert User if Username is Taken
    else{
        // Get Error Text
        var errorText = document.getElementById("usernameTakenError");

        // Change Error Text
        errorText.innerHTML = [`${"That Username is Taken"}`]

        // Make Text Visible
        errorText.style.display = "flex";
    }
    // Alert User if Passwords Do Not Match
    if(password1 != password2)
    {
        // Get Error Text
        var errorText = document.getElementById("passwordMismatchError");

        // Change Error Text
        errorText.innerHTML = [`${"Your Passwords Do Not Match"}`]

        // Make Text Visible
        errorText.style.display = "flex";
    }
}