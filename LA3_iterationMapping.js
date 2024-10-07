// Prompt the user for the Max Limit
let maxLimit = prompt("Enter the Max Limit of the Loops:");
// Initialize the counters to zero
maxLimit = Number(maxLimit);
let counter1 = 0;
let counter2 = 0;
let sum = 0;
// Use a double loop to print the map of iterations and added values
for (let i = 0; i < maxLimit; i++){
    counter1 = i; 
  for (let j = 0; j < maxLimit; j++){
        counter2 = j; 
        sum = counter1 + counter2;
// Log the corresponding loop points and the added value
        console.log(`Loop Points - Counter1: ${counter1}, Counter2: ${counter2}, Sum: ${sum}`);
    }
