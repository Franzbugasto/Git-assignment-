//declare a var that will hold the uname, use a user input method
let uname = prompt("Register your Username");
//declare a var that will hold the pword, use a user input method
let pword = prompt("Register your passcode");
//declare a variable that will hold the re-pword, use a user input method
let rePword = prompt("Re-enter your passcode");
// Declare a variable that will hold the uname on Login
let uname = prompt("Register your Username");
// Declare a variable that will hold the pword on Login
let pword = prompt("Register your passcode");
// Declare a variable that will hold the re-pword on Login
let rePword = prompt("Re-enter your passcode");
// Compare the Registered Password and Re-entered Password
if (pword === rePword) {
    // Pop-up to Congratulate the user for registering
    // Declare a variable that will hold the uname on Login
    let enteredUname = prompt("Username: ");    
    // Declare a variable that will hold the pword on Login
    let enteredPword = prompt("Password: ");    
    // Compare the registered uname and entered uname on Login
    if (uname === enteredUname) {
        // Compare the registered pword and entered pword on Login
        if (pword === enteredPword) {
            // Pop-up to Congratulate the user for successful Login
            alert("Welcome to DSA, " + uname);
        } else {
            // Pop-up to Inform the user of the incorrect passcode
            alert("Incorrect Password, Re-run the code!");
        }
    } else {
        // Pop-up to Inform the user of the incorrect username
        alert("Incorrect Username, Re-run the code!");
    }
} else {
    // Pop-up to Inform the user the regPcode and re-entered pCode does not match
    alert("Password does not Match, Re-run the code!");
}
