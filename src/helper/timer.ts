// Question 1: Create timer without using setInterval
// Inintialize the timer and isRunning variable
let timer = 0;
let isRunning = false;
// Initialize the timeoutId variable with ReturnType<typeof setTimeout> type
let timeoutId: ReturnType<typeof setTimeout>;

// a. Create a timer that starts from 0 and increments every second
export function start() {
  if (!isRunning) {
    isRunning = true;
    const startTime = Date.now();

    // Update the timer every second
    function updateTimer() {
      // Check if the timer is running
      if (isRunning) {
        const elapsedTime = Date.now() - startTime;
        timer = Math.floor(elapsedTime / 1000);
        console.log("current time", timer);
        timeoutId = setTimeout(updateTimer, 1000);
      }
    }

    updateTimer();
  }
}

// b. Pause the timer when will be called
export function pause() {
  // Set isRunning to false and clear the timeout
  isRunning = false;
  // Clear the timeout
  clearTimeout(timeoutId);
}

// c. Reset the timer when will be called
export function reset() {
  // Set isRunning to false and clear the timeout
  isRunning = false;
  // Clear the timeout
  clearTimeout(timeoutId);
  // Reset the timer value
  timer = 0;
}

export function getTimer() {
  // Return the current timer value
  return timer;
}

/* Workflow:

- Start the timer by calling start() function, isRunning variable was set true and updateTimer called first.
- Inside updateTimer function, calculate the elapsed time, update timer value and call itself again if isRunning is true.
- Pause the timer by calling pause() function, isRunning variable was set false and clearTimeout called to stop the timer.
- Reset the timer by calling reset() function, isRunning variable was set false, clearTimeout called to stop the timer and timer value was set to 0.
- getTimer() function will return the current timer value.

*/
