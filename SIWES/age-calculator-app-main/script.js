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
    else {
      function diff_years(dt2, dt1) 
      {
     
       var diff =(dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24);
       return Math.abs(Math.round(diff/365.25));
        
      }
     
     dt1 = year;
     dt2 = currentYear;
     let show = (diff_years(dt1, dt2))
     document.getElementById('year').innerHTML = show;
    }
    });


   

  //   function ageCalculator() {  
  //     var userinput = document.getElementById("DOB").value;  
  //     var dob = new Date(userinput);  
  //     if(userinput==null || userinput=='') {  
  //       document.getElementById("message").innerHTML = "**Choose a date please!";    
  //       return false;   
  //     } else {  
        
  //     //calculate month difference from current date in time  
  //     var month_diff = Date.now() - dob.getTime();  
        
  //     //convert the calculated difference in date format  
  //     var age_dt = new Date(month_diff);   
        
  //     //extract year from date      
  //     var year = age_dt.getUTCFullYear();  
        
  //     //now calculate the age of the user  
  //     var age = Math.abs(year - 1970);  
        
  //     //display the calculated age  
  //     return document.getElementById("result").innerHTML =    
  //              "Age is: " + age + " years. ";  
  //     }  
  // }  