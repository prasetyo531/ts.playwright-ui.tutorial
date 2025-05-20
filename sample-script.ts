// helpers/sampleScript.ts

// Import the 'dotenv' package to load environment variables from a .env file
import * as dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// Function to log a greeting message
function logGreeting() {
  const greeting = process.env.BASE_URL || 'Hello, World!';
  console.log(greeting);
}

// Function to perform a simple task
function performTask() {
  console.log('Performing a sample task...');
  // Add any additional logic here
}

// Main function to execute the script
function main() {
  logGreeting();
  performTask();
}

// Execute the main function
main();
