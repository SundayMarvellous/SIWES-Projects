// async function getRandomActivity() {
//     var apiURL="http://www.boredapi.com/api/activity/";
//     var response= await fetch(apiURL);
//     var data= await response.json()
//     // console.log(data); 
//     var {activity} = data;
//     // document.querySelector("MyParagraph").innerHTML = activity;
//     document.querySelector("MyParagraph").innerHTML = activity;
// }
// setInterval(getRandomActivity, 3000)
 
function yourActivity(){
    fetch("http://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data =>{
        document.getElementById("activity").innerText = data.activity;

    })
}
yourActivity();
setInterval(() => {
        yourActivity();
}, 1000);
