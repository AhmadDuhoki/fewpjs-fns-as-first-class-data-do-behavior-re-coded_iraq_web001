/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(stringTime){
  const timeSplit = stringTime.split(':');
  const parseTime = parseInt(stringTime);
  
  if(parseTime<12){
    return "Good Morning"
  }
  if(parseTime<5 &&){
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
