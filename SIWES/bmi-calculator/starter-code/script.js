
const form = document.getElementById('myForm');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');

form.addEventListener('change', function() {
  const selectedOption = document.querySelector('input[name="measurement-type"]:checked').value;
  
  if (selectedOption === 'Metric') {
    content1.style.display = 'block';
    content2.style.display = 'none';
  } else if (selectedOption === 'Imperial') {
    content1.style.display = 'none';
    content2.style.display = 'block';
  }
});

$(document).ready(function(){
  $('input[type="radio"]').click(function(){
      var inputValue = $(this).attr("value");
      var targetBox = $("." + inputValue);
      $(".result").not(targetBox).hide();
      $(targetBox).show();
  });
});
// Calculate BMI based on height and weight
function calculateBMI(height, weight) {
return weight / ((height / 100) ** 2);
}

// Update BMI result and classification
function updateBMIResult(height, bmi) {
const showResultElement = document.getElementById("show-result");
const classificationElement = document.getElementById("classification");
const rangeElement = document.getElementById("range");

showResultElement.textContent = bmi.toFixed(1);

if (bmi < 18.5) {
  classificationElement.textContent = "underweight";
} else if (bmi >= 18.5 && bmi < 25) {
  classificationElement.textContent = "healthy weight";
} else if (bmi >= 25 && bmi < 30) {
  classificationElement.textContent = "overweight";
} else {
  classificationElement.textContent = "obese";
}

const lowerRange = (18.5 * ((height / 100) ** 2)).toFixed(1);
const upperRange = (24.9 * ((height / 100) ** 2)).toFixed(1);
rangeElement.textContent = `${lowerRange}kg - ${upperRange}kg`;
}

// Add event listeners to height and weight input fields for instant updates
document.getElementById("height").addEventListener("input", updateBMIOnChange);
document.getElementById("weight").addEventListener("input", updateBMIOnChange);

function updateBMIOnChange() {
const measurementType = document.querySelector('input[name="measurement-type"]:checked').value;

const heightElement = document.getElementById("height");
const weightElement = document.getElementById("weight");

const height = parseFloat(heightElement.value);
const weight = parseFloat(weightElement.value);

if (!isNaN(height) && !isNaN(weight)) {
  let bmi = 0;

  if (measurementType === "Metric") {
    bmi = calculateBMI(height, weight);
  } else {
    let feet = parseFloat(document.querySelector(".feet input").value) || 0;
    let inches = parseFloat(document.querySelector(".inch input").value) || 0;
    let stones = parseFloat(document.querySelector(".st input").value) || 0;
    let pounds = parseFloat(document.querySelector(".lbs input").value) || 0;

    const heightInCm = (feet * 12 + inches) * 2.54;
    const weightInKg = (stones * 14 + pounds) * 0.45359237;

    bmi = calculateBMI(heightInCm, weightInKg);
  }

  updateBMIResult(height, bmi);
}
}
