// Get user input for the required fields
let name = prompt("Enter your Name:");
let address = prompt("Enter your Address:");
let age = parseInt(prompt("Enter your Age:"));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");

// Use conditional statements to check the course
if (course === "BSCS") {
    // User is enrolled in the BSCS program
    alert("You are enrolled in the Bachelor of Science in Computer Science program.");
} else if (course === "BSM") {
    // User is enrolled in the BSM program
    alert("You are enrolled in the Bachelor of Science in Management program.");
} else if (course === "BAEL") {
    // User is enrolled in the BAEL program
    alert("You are enrolled in the Bachelor of Arts in English Language program.");
} else {
    // Course not recognized
    alert("Course not recognized. Default fallback to General Studies.");
}

// Loop statement to print the user's name
// Number of iterations is 1/4 of the age input
let iterations = Math.floor(age / 4);

// Print the user's name in each iteration
for (let i = 0; i < iterations; i++) {
    console.log("User's Name: " + name);
}

// Optional: Additional condition to handle class role
if (classRole === "Officer") {
    // Officer role notification
    alert("As an Officer, you have additional responsibilities.");
} else if (classRole === "Student") {
    // Student role notification
    alert("As a Student, focus on your studies.");
} else if (classRole === "Teacher") {
    // Teacher role notification
    alert("As a Teacher, you are responsible for guiding students.");
} else {
    // Unrecognized class role
    alert("Unrecognized class role.");
}
