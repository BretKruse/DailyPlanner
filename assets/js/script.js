// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // Select all save buttons
let saveButtons = document.querySelectorAll('.saveBtn');

// Add click event listener to each save button
saveButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // `this` refers to the button that was clicked
    let saveBtn = this;

    // Traverse the DOM to get the parent time-block
    let timeBlock = saveBtn.parentElement;

    // Get the id of the time-block
    let timeBlockId = timeBlock.id;

    // Get the user input from the sibling textarea of the save button
    let userInput = saveBtn.previousElementSibling.value;

    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });
});
  
// TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $(document).ready(function() {
    // Get the current hour using Day.js
    var currentHour = dayjs().hour();

    // Loop through each time-block
    $('.time-block').each(function() {
        // Get the id of the time-block
        var blockHour = parseInt($(this).attr('id'));

        // Remove any existing classes
        $(this).removeClass('past present future');
        console.log(blockHour, currentHour)
        // Compare the blockHour with the currentHour and add the appropriate class
        if (blockHour < currentHour) {
            $(this).addClass('past');
        } else if (blockHour === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    });
});
  
// TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // Get all the textarea elements
const textareas = document.querySelectorAll('textarea');

// Loop through each textarea element
textareas.forEach(textarea => {
  // Get the id attribute of the textarea element
  const id = textarea.getAttribute('id');

  // Get the saved user input from localStorage using the id as the key
  const userInput = localStorage.getItem(id);

  // Set the value of the textarea element to the saved user input
  textarea.value = userInput;
});
  
// TODO: Add code to display the current date in the header of the page.
    // HINT: How can Day.js be used to format the current date?
    // Get the current date using Day.js
const currentDate = dayjs().format('MMMM D, YYYY');

// Update the element with the current date
document.getElementById('current-date').textContent = currentDate;
    
});
