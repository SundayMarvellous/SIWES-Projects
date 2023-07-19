document.getElementById('ageForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var dayInput = document.getElementById('day');
  var monthInput = document.getElementById('month');
  var yearInput = document.getElementById('year');
  var dayError = document.getElementById('dayError');
  var monthError = document.getElementById('monthError');
  var yearError = document.getElementById('yearError');

  var day = parseInt(dayInput.value);
  var month = parseInt(monthInput.value);
  var year = parseInt(yearInput.value);

  var currentDate = new Date();
  var enteredDate = new Date(year, month - 1, day);

  // Clear previous error messages
  dayError.textContent = '';
  monthError.textContent = '';
  yearError.textContent = '';

  if (isNaN(day) || day < 1 || day > 31) {
    dayError.textContent = 'Must be a valid day';
    dayInput.focus();
  } else if (isNaN(month) || month < 1 || month > 12) {
    monthError.textContent = 'Must be a valid month';
    monthInput.focus();
  } else if (isNaN(year) || year < 1 || year > currentDate.getFullYear()) {
    yearError.textContent = 'Must be in the past';
    yearInput.focus();
  } else if (dayInput.value.trim() === '') {
    dayError.textContent = 'The field is required';
    dayInput.focus();
  } else if (monthInput.value.trim() === '') {
    monthError.textContent = 'The field is required';
    monthInput.focus();
  } else if (yearInput.value.trim() === '') {
    yearError.textContent = 'The field is required';
    yearInput.focus();
  } else if (enteredDate > currentDate || enteredDate.getMonth() !== month - 1) {
    dayError.textContent = 'Must be a valid date';
    dayInput.value = '';
    monthInput.value = '';
    yearInput.value = '';
    dayInput.focus();
  } else {
    var ageInMilliseconds = currentDate - enteredDate;
    var ageDate = new Date(ageInMilliseconds);
    var ageYears = ageDate.getUTCFullYear() - 1970;
    var ageMonths = ageDate.getUTCMonth();
    var ageDays = ageDate.getUTCDate() - 1;

    document.getElementById('yearResult').textContent = ageYears;
    document.getElementById('monthResult').textContent = ageMonths;
    document.getElementById('dayResult').textContent = ageDays;
  }
});
