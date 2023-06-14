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
 //this line of code is for when the activities are showing at intervals


// function yourActivity(){
//     fetch("http://www.boredapi.com/api/activity/")
//     .then(res => res.json())
//     .then(data =>{
//         document.getElementById("activity").innerText = data.activity;

//     })
// }
// yourActivity();
// setInterval(() => {
//         yourActivity();
// }, 1000);

function yourActivity(){
    container.classlist.replace('invisible', 'visible')
    header.classList.replace('visible', 'invisible')
    button.style.top ='75%'
    button.stye.transform ='translate(-50%, -50%) scale(1.4)'
    fetch("http://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data =>{
       console.log(data)
    })
}
document.getElementById('add-activity').addEventListener('click', yourActivity)





