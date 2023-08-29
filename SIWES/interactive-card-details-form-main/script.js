function myfunction(e) { 
    e.preventDefault();
    var myText = document.getElementById("cardholder-name").value;
    document.getElementById('cardholdername').innerHTML = myText;
    var myNumber = document.getElementById("card-number").value;
    document.getElementById('cardholdernumber').innerHTML = myNumber;
    var myCvc = document.getElementById("cvc").value;
    document.getElementById('cardcvc').innerHTML = myCvc;
    var myMonth = document.getElementById("card-month").value;
    document.getElementById('cardmonth').innerHTML = myMonth;
    var myYear = document.getElementById("card-year").value;
    document.getElementById('cardyear').innerHTML = myYear;
 } 
// function mySubmit(){
//     //  //adding some text to newly created div element
//      var newDiv = document.getElementById('completedstate');
//      var oldDiv = document.getElementsByTagName('form')
 
//      newDiv.style.dislpay = 'block';
//      oldDiv.style.dislpay = 'none';
     
// }
