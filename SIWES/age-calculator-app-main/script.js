document.querySelector('form').addEventListener('submit', function(event) {
    var dayInput = document.getElementById('day');
    var day = parseInt(dayInput.value);

    if (isNaN(day) || day < 1 || day > 31) {
      event.preventDefault(); // Prevent form submission
      alert('Must be a valid day');
      dayInput.value = ''; // Clear the input field
      dayInput.focus(); // Set focus to the input field
    }
  });

  document.querySelector('form').addEventListener('submit', function(event) {
    var monthInput = document.getElementById('month');
    var month = parseInt(monthInput.value);

    if (isNaN(month) || month < 1 || month > 12) {
      event.preventDefault(); // Prevent form submission
      alert('Must be a valid month');
      monthInput.value = ''; // Clear the input field
      monthInput.focus(); // Set focus to the input field
    }
  });

  document.querySelector('form').addEventListener('submit', function(event) {
    var yearInput = document.getElementById('year');
    var year = parseInt(yearInput.value);
    var currentYear = new Date().getFullYear();
    if (isNaN(year) || year < 1 || year > currentYear) {
        event.preventDefault(); // Prevent form submission
        alert('Must be in the past');
        yearInput.value = ''; // Clear the input field
        yearInput.focus(); // Set focus to the input field
      }
    });